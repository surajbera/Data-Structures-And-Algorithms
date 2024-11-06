const fs = require('fs');
const path = require('path');

const srcDir = path.join(__dirname, 'src');
const readmePath = path.join(__dirname, 'README.md');

function getProblemFiles(dir) {
  const entries = fs.readdirSync(dir, { withFileTypes: true });
  const sets = [];

  entries.forEach((entry) => {
    if (entry.isDirectory()) {
      const setPath = path.join(dir, entry.name);
      const problemFiles = fs
        .readdirSync(setPath)
        .filter((file) => file.endsWith('.ts'))
        .map((file) => ({
          name: file,
          path: path.relative(__dirname, path.join(setPath, file)),
        }));
      sets.push({
        setName: entry.name,
        problems: problemFiles,
      });
    }
  });

  return sets;
}

function generateReadmeContent(sets) {
  let content = '# Data Structures and Algorithms in TypeScript\n\n';
  content += 'This project contains TypeScript implementations of common data structures and algorithms.\n\n';
  content += '## Problems by Category\n\n';

  sets.forEach((set) => {
    content += `### ${set.setName}\n\n`;
    set.problems.forEach((problem) => {
      const problemName = problem.name.replace('.ts', '');
      content += `- [${problemName}](${problem.path})\n`;
    });
    content += '\n';
  });

  return content;
}

function updateReadme() {
  const sets = getProblemFiles(srcDir);
  const readmeContent = generateReadmeContent(sets);
  fs.writeFileSync(readmePath, readmeContent);
  console.log('README.md has been updated.');
}

updateReadme();
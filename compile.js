const { exec } = require('child_process');
const fs = require('fs');
const path = require('path');

const problemFile = process.argv[2];
const srcDir = path.join(__dirname, 'src');
const outputDir = path.join(__dirname, 'output');

// Compile the TypeScript file
exec(`npx tsc ${path.join(srcDir, problemFile)} --outDir ${outputDir}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Compilation error: ${error}`);
    return;
  }

  // Get the base name of the problem file
  const baseName = path.basename(problemFile, '.ts');
  
  // The compiled file will have the same base name but with .js extension
  const compiledFile = path.join(outputDir, `${baseName}.js`);
  const targetFile = path.join(outputDir, 'script.js');

  // Check if the compiled file exists
  if (fs.existsSync(compiledFile)) {
    fs.rename(compiledFile, targetFile, (err) => {
      if (err) {
        console.error(`Error renaming file: ${err}`);
        return;
      }
      console.log(`Compiled and renamed ${problemFile} to script.js`);
    });
  } else {
    console.error(`Compiled file not found: ${compiledFile}`);
  }
});
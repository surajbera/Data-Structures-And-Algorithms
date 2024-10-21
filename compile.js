const { exec } = require('child_process'); // Import the exec function from the child_process module to run shell commands
const fs = require('fs'); // Import the fs module to interact with the file system
const path = require('path'); // Import the path module to handle and transform file paths

const problemFile = process.argv[2]; // Get the TypeScript file name from the command line arguments
const srcDir = path.join(__dirname, 'src'); // Define the source directory path
const outputDir = path.join(__dirname, 'output'); // Define the output directory path

// Compile the TypeScript file using the TypeScript compiler (tsc)
exec(`npx tsc ${path.join(srcDir, problemFile)} --outDir ${outputDir}`, (error, stdout, stderr) => {
  if (error) {
    console.error(`Compilation error: ${error}`); // Log any compilation errors
    return;
  }

  // Define the paths for the compiled file and the target file
  const compiledFile = path.join(outputDir, problemFile.replace('.ts', '.js')); // Path of the compiled JavaScript file
  const targetFile = path.join(outputDir, 'script.js'); // Path where the compiled file will be renamed to script.js

  // Rename the compiled file to script.js
  fs.rename(compiledFile, targetFile, (err) => {
    if (err) {
      console.error(`Error renaming file: ${err}`); // Log any errors during the renaming process
      return;
    }
    console.log(`Compiled and renamed ${problemFile} to script.js`); // Log success message
  });
});
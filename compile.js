const { exec } = require('child_process'); // For executing shell commands
const fs = require('fs'); // For file system operations
const path = require('path'); // For handling file paths

// Get command line arguments and set up directories
const problemFile = process.argv[2]; // Get the TypeScript file name from command line arguments
const srcDir = path.join(__dirname, 'src'); // Set the source directory path
const outputDir = path.join(__dirname, 'output'); // Set the output directory path

// Execute TypeScript compiler command
exec(`npx tsc ${path.join(srcDir, problemFile)} --outDir ${outputDir}`, (error, stdout, stderr) => {
  // Run TypeScript compiler on the input file and output to the specified directory
  
  if (error) {
    console.error(`Compilation error: ${error}`); // Log any compilation errors
    return;
  }

  // Extract the base name of the file (without extension)
  const baseName = path.basename(problemFile, '.ts');
  
  // Define paths for the compiled and target files
  const compiledFile = path.join(outputDir, `${baseName}.js`); // Path of the compiled JavaScript file
  const targetFile = path.join(outputDir, 'script.js'); // Path for the renamed output file

  // Check if the compiled file exists
  if (fs.existsSync(compiledFile)) {
    // Rename the compiled file to 'script.js'
    fs.rename(compiledFile, targetFile, (err) => {
      if (err) {
        console.error(`Error renaming file: ${err}`); // Log any errors during renaming
        return;
      }
      console.log(`Compiled and renamed ${problemFile} to script.js`); // Log success message
    });
  } else {
    console.error(`Compiled file not found: ${compiledFile}`); // Log error if compiled file is missing
  }
});
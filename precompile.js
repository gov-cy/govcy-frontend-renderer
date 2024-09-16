const nunjucks = require('nunjucks');
const fs = require('fs');
const path = require('path');

// Define an array of folder paths
const templateDirs = [
    'src/njk/utilities/',
    'src/njk/elements/',
    'src/njk/'
];
const outputFile = './compiled-templates.js';

// Function to precompile templates from multiple folders
const precompileTemplates = (templateDirs, outputFile) => {
    console.log(`Starting precompilation from multiple folders...`);

    let compiledTemplates = '';

    // Counter to track completed directories
    let processedFolders = 0;

    // Function to write to output file
    const writeOutput = () => {
        fs.writeFile(outputFile, compiledTemplates, (writeErr) => {
            if (writeErr) {
                console.error('Error writing to file:', writeErr);
            } else {
                console.log(`Precompiled templates written to ${outputFile}`);
            }
        });
    };

    // Loop through each folder in the templateDirs array
    templateDirs.forEach((templateDir) => {
        console.log(`Processing folder: ${templateDir}`);

        // Read all the files in the current directory
        fs.readdir(templateDir, (err, files) => {
            if (err) {
                console.error(`Error reading directory ${templateDir}:`, err);
                // Increment the processedFolders counter to ensure we still attempt to write output
                processedFolders++;
                if (processedFolders === templateDirs.length) {
                    writeOutput();
                }
                return;
            }

            // Filter only .njk files
            const njkFiles = files.filter(file => file.endsWith('.njk'));

            if (njkFiles.length === 0) {
                console.log(`No .njk files found in ${templateDir}`);
                processedFolders++;
                if (processedFolders === templateDirs.length) {
                    writeOutput();
                }
                return;
            }

            njkFiles.forEach((file) => {
                const filePath = path.join(templateDir, file);

                try {
                    // Precompile the template
                    const precompiled = nunjucks.precompile(filePath, { name: file });
                    compiledTemplates += precompiled + '\n';

                    console.log(`Compiled: ${file}`);
                } catch (precompileErr) {
                    console.error(`Error precompiling ${file}:`, precompileErr);
                }
            });

            // Increment the processedFolders counter to ensure we write output after processing all folders
            processedFolders++;
            if (processedFolders === templateDirs.length) {
                writeOutput();
            }
        });
    });
};

// Precompile templates from multiple folders
precompileTemplates(templateDirs, outputFile);

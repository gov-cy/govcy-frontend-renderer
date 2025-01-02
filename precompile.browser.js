// Import required modules
const nunjucks = require('nunjucks');
const fs = require('fs');
const path = require('path');

// Define an array of folder paths containing the Nunjucks templates
const templateDirs = [
    'src/njk/utilities/',
    'src/njk/elements/',
    'src/njk/'
];

// Define the output file for the precompiled templates
const outputFile = './dist/govcyCompiledTemplates.browser.js';

// Create a new Nunjucks environment with a file system loader
let env = new nunjucks.Environment(new nunjucks.FileSystemLoader('src/njk'));

// Function to precompile templates from multiple folders
const precompileTemplates = (templateDirs, outputFile, env) => {
    console.log(`Starting precompilation from multiple folders...`);

    let compiledTemplates = ''; // Initialize a string to hold the compiled templates

    // Counter to track completed directories
    let processedFolders = 0;

    // Function to write the compiled templates to the output file
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

            // Loop through each .njk file in the directory
            njkFiles.forEach((file) => {
                const filePath = path.join(templateDir, file); // Get the full path to the file
                const templateName = path.relative('src/njk', filePath).replace(/\\/g, '/'); // Get the relative path for the template name

                try {
                    // Read the file content
                    let fileContent = fs.readFileSync(filePath, 'utf8');

                    // Replace instances of '../' with ''
                    fileContent = fileContent.replace(/(\.\.\/)+/g, '');

                    // Replace instances of './elements/' with 'elements/'
                    fileContent = fileContent.replace(/\.\/elements\//g, 'elements/');
                    
                    // Replace instances of './' with 'elements/'
                    fileContent = fileContent.replace(/\.\//g, 'elements/');

                    // Precompile the template
                    const precompiled = nunjucks.precompileString(fileContent, { name: templateName, "env": env });
                    compiledTemplates += precompiled + '\n'; // Append the precompiled template to the compiledTemplates string

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
precompileTemplates(templateDirs, outputFile, env);
const request = require('request');
const fs = require('fs');

// Check if correct number of arguments provided
if (process.argv.length !== 4) {
    console.error("Usage: node script.js <URL> <file_path>");
    process.exit(1);
}

const url = process.argv[2];
const filePath = process.argv[3];

// Make the request
request.get({url: url, encoding: 'utf-8'}, (error, response, body) => {
    if (error) {
        console.error("Error fetching webpage content:", error);
    } else if (response.statusCode !== 200) {
        console.error("Error: Unexpected status code", response.statusCode);
    } else {
        // Write the response to a file
        fs.writeFile(filePath, body, { encoding: 'utf-8' }, (err) => {
            if (err) {
                console.error("Error writing to file:", err);
            } else {
                console.log("Webpage content successfully stored in", filePath);
            }
        });
    }
});

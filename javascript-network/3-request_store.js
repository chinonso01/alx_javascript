const request = require('request');
const fs = require('fs');

// Get the URL and file path from the command line arguments
const url = process.argv[2];
const filePath = process.argv[3];

// Make a GET request to the URL
request.get(url, (error, response, body) => {
    if (error) {
        // If there's an error, print it
        console.error(error);
    } else {
        if (response.statusCode === 200) {
            // Write the body response to the file
            fs.writeFile(filePath, body, 'utf-8', (err) => {
                if (err) {
                    // If there's an error writing to the file, print it
                    console.error(err);
                } else {
                    // Print a success message
                    console.log(`Content successfully saved to ${filePath}`);
                }
            });
        } else {
            console.error(`Failed to fetch content from ${url}. Status code: ${response.statusCode}`);
        }
    }
});

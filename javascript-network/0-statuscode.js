const request = require('request');

// Get the URL from the command line argument
const url = process.argv[2];

// Make a GET request to the URL
request.get(url, (error, response) => {
    if (error) {
        // If there's an error, print it
        console.error(error);
    } else {
        // Print the status code
        console.log(`code: ${response.statusCode}`);
    }
});

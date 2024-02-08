// Import the request module
const request = require('request');
// Import the fs module
const fs = require('fs');

// Get the command line arguments
const url = process.argv[2]; // The URL to request
const filePath = process.argv[3]; // The file path to store the body response

// Make a GET request to the URL
request.get(url, (error, response, body) => {
  // Check for errors
  if (error) {
    console.error(error);
    return;
  }
  // Check for status code
  if (response.statusCode !== 200) {
    console.error(`Status code: ${response.statusCode}`);
    return;
  }
  // Write the body response to the file in UTF-8 encoding
  fs.writeFile(filePath, body, 'utf8', (error) => {
    // Check for errors
    if (error) {
      console.error(error);
      return;
    }
    // Log a success message
    console.log(`Saved the contents of ${url} to ${filePath}`);
  });
});

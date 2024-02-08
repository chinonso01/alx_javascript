const fs = require('fs');
const request = require('request');

const url = process.argv[2];
const filePath = process.argv[3];

if (!url || !filePath) {
  console.error("Usage: node script.js <url> <file_path>");
  process.exit(1);
}

request.get({ url: url, encoding: null }, (error, response, body) => {
  if (error) {
    console.error("Error fetching webpage content:", error);
  } else if (response.statusCode !== 200) {
    console.error("Error: Unexpected status code", response.statusCode);
  } else {
    const decodedBody = body.toString('utf8');
    fs.writeFile(filePath, decodedBody, { encoding: 'utf-8' }, (err) => {
      if (err) {
        console.error("Error writing to file:", err);
      } else {
        console.log("Webpage content successfully stored in", filePath);
      }
    });
  }
});

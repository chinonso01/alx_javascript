const request = require('request');

// Get the movie ID from the command line argument
const movieId = process.argv[2];

// Construct the URL with the provided movie ID
const apiUrl = `https://swapi-api.alx-tools.com/api/films/${movieId}`;

// Make a GET request to the Star Wars API
request.get(apiUrl, (error, response, body) => {
    if (error) {
        // If there's an error, print it
        console.error(error);
    } else {
        // Parse the JSON response body
        const movieData = JSON.parse(body);
        // Print the title of the movie
        console.log(movieData.title);
    }
});

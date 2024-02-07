const request = require('request');

// Get the Movie ID from the command line argument
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
        
        // Print each character name
        movieData.characters.forEach(characterUrl => {
            request.get(characterUrl, (error, response, body) => {
                if (error) {
                    console.error(error);
                } else {
                    const characterData = JSON.parse(body);
                    console.log(characterData.name);
                }
            });
        });
    }
});

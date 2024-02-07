const request = require('request');

// Get the API URL from the command line argument
const apiUrl = process.argv[2];

// ID of the character "Wedge Antilles"
const characterId = '18';

// Make a GET request to the Star Wars API to fetch the films
request.get(apiUrl, (error, response, body) => {
    if (error) {
        // If there's an error, print it
        console.error(error);
    } else {
        // Parse the JSON response body
        const films = JSON.parse(body).results;

        // Count the number of films where "Wedge Antilles" is present
        const numFilmsWithWedge = films.filter(film =>
            film.characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)
        ).length;

        // Print the count
        console.log(numFilmsWithWedge);
    }
});

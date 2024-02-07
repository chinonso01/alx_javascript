const request = require('request');

// Get the API URL from the command line argument
const apiUrl = process.argv[2];

// Make a GET request to the API URL
request.get(apiUrl, (error, response, body) => {
    if (error) {
        // If there's an error, print it
        console.error(error);
    } else {
        // Parse the JSON response body
        const todos = JSON.parse(body);

        // Create an object to store the count of completed tasks for each user
        const completedTasksByUser = {};

        // Loop through each todo
        todos.forEach(todo => {
            // Check if the todo is completed
            if (todo.completed) {
                // Increment the count of completed tasks for the user
                if (completedTasksByUser[todo.userId]) {
                    completedTasksByUser[todo.userId]++;
                } else {
                    completedTasksByUser[todo.userId] = 1;
                }
            }
        });

        // Print the object containing the count of completed tasks for each user
        console.log(completedTasksByUser);
    }
});

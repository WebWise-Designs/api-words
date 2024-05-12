// Importing required modules
const express = require('express');

// Creating an Express application
const app = express();

// Define a route for the homepage
app.get('/', (req, res) => {
    res.send('Hi');
});

// Starting the server on port 3000
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

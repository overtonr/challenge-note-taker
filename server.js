// Dependencies
const express = require('express');
const path = require('path');
//const api



const PORT = process.env.PORT || 3000;

//Allows server to use express
const app = express();

//Allows the express app to run static files
app.use(express.static('public'));
//use api


// Data: stored in db.json file

// Routes
//GET route for landing page
app.get('/', (req,res) =>
    res.sendFile(path.join(__dirname,'/public/index.html'))
);

//GET route for note page
app.get('/notes', (req,res) =>
    res.sendFile(path.join(__dirname,'/public/notes.html'))
);

// Listener
app.listen(PORT, () =>
console.log(`Listening at  http://localhost:${PORT}`)
);


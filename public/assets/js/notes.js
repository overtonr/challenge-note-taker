const notes = require('express').Router();

const { v4: uuidv4 } = require('uuid');

//GET route for all notes
notes.get('/', (req, res) => {
    //retrieves and parses data from json response
    readFromFile('./db/db.json').then((data) => res.json(JSON.parse(data)));
  });

//POST route for each new note
notes.post('/', (req, res) => {
    console.log(req.body);


const {title, text} = req.body;

if (req.body){
    const newNote = {
        //input title
        title,
        //input text
        text,
        //random ID for each note added
        note_id: uuidv4(),
    };

    readAndAppend(newNote, './db/db.json');
    res.json('New note added');
} else {
    res.error('Error; new tip not added');
}
});

module.exports = notes;
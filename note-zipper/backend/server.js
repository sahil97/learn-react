const express = require('express');
const notes = require('./data/notes');
const dotenv = require('dotenv');


const app = express();
dotenv.config()

app.get('/', (req, res) => {
    res.send("API is running");
});

app.get('/api/notes', (req, res) => {
    res.json(notes);
});

app.get('/api/notes/:id', (req, res) => {
    let filteredNotes = notes.find(n => n._id === req.params.id);
    res.json(filteredNotes);
});

const PORT = process.env.port || 5000;
app.listen(PORT, console.log(`Server started on port: ${PORT}`));
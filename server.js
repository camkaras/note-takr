const fs = require('fs');
const path = require('path');

const { notes } = require('./data/db');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: true }));
app.use(express.json());

function createNote(body, notesArray) {
    const note = body;
    notesArray.push(note)
    console.log(body);
    fs.writeFileSync(
        path.join(__dirname, './data/db.json'),
        JSON.stringify({ notes: notesArray }, null, 2)
    );

    return note;
}

app.get('/api/db', (req, res) => {
    let results = notes;
    console.log(req.query)
    
    res.json(results);
});

app.post('/api/db', (req, res) => {
    // req.body is where our incoming content will be
    console.log(req.body);
    const note = createNote(req.body, notes);
    res.json(note);
});

app.listen(PORT, () => {
    console.log(`Note-Taker server now on port ${PORT}!`);
});

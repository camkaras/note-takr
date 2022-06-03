const { notes } = require('./data/db');
const express = require('express');
const app = express();


app.get('/api/db', (req, res) => {
    let results = notes;
    console.log(req.query)
    res.json(results);
});

app.listen(3001, () => {
    console.log(`Note-Taker server now on port 3001!`);
});

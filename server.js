const { notes } = require('./data/db');
const express = require('express');
const PORT = process.env.PORT || 3001;
const app = express();


app.get('/api/db', (req, res) => {
    let results = notes;
    console.log(req.query)
    res.json(results);
});

app.listen(PORT, () => {
    console.log(`Note-Taker server now on port ${PORT}!`);
});

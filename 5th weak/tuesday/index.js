const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

const port = process.env.PORT || 3100;

app.get('/', (req, res) => {
    res.send('<h1>Hello World!</h1>');
});

app.get('/about', (req, res) => {
    res.send('About Page');
});

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
});


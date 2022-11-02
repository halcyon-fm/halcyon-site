/*
 *  filename: main.js
 *  description: Main server entry point
 **/

/** System imports **/
const path = require('path')

/** External imports **/
const axios = require('axios')
const express = require('express')

/** Project imports **/
const Releases = require('./models/releases');

const app = express()
const port = process.env.PORT || '3000';

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/api/releases', async (req, res) => {
    try {
        const releases = await Releases.getAll();
        res.json({ 'releases': releases });
    } catch (error) {
        console.log(error);
        res.json({ 'release': {} });
    }
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist/home.html'));
});

app.listen(port, () => {
    console.log(`Listetning on port ${port}`);
});


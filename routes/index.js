const express = require('express');
const routes = express.Router();
const numberToWords = require('../src/lib/numbersToWords');
const wordsToNumber = require('../src/lib/wordsToNumber');


routes.post('/to/words', (req, res) => {
    try {
        let number = req.body.number;
        if (number == undefined) {
            res.status(422).json({ error: "Invalid Input" });
            return;
        }
        let words = numberToWords(Number(req.body.number));
        res.json({ words });
    } catch (error) {
        res.status(422).json({ error: error.message });
    }
});

routes.post('/to/number', (req, res) => {
    try {
        let words = req.body.words;
        if (words == undefined) {
            res.status(422).json({ error: "Invalid Input" });
            return;
        }
        let number = wordsToNumber(words);
        res.json({ number });
    } catch (error) {
        res.status(422).json({ error: error.message });
    }
});

routes.all('/to/number', (req, res) => {
    res.status(405).json({ error: 'Method Not Allowed' });
});

routes.all('/to/words', (req, res) => {
    res.status(405).json({ error: 'Method Not Allowed' });
});

routes.all('*', (req, res) => {
    res.status(404).json({ error: 'Not Found' });
});

module.exports = routes;
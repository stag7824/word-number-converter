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
    // Conversion logic goes here
    try {
        let number = req.body.words;
        if (number == undefined) {
            res.status(422).json({ error: "Invalid Input" });
            return;
        }
        number = wordsToNumber(req.body.words);
        res.json({ number });
    } catch (error) {
        res.status(422).json({ error: error.message });
    }
});

module.exports = routes;
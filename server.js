const express = require('express');

const app = express();

app.use(express.json());

app.listen(3000, () => console.log('Server running on port 3000'));


const wordsToNumber=require('./wordsToNumber')


app.post('/to/number', (req, res) => {
  // Conversion logic goes here
  try {
    let number = req.body.words;
    if (number == undefined) {
      res.status(433).json({ error: "Invalid Input" });
      return;
    }
    number=wordsToNumber(req.body.words);
    res.json({ number });
  } catch (error) {
    res.status(422).json({ error: error.message });
  }
});


app.post('/to/words', (req, res) => {
  // Conversion logic goes here
});
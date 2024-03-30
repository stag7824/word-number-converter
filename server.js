require('dotenv').config();

const express = require('express');

const app = express();

app.use(express.json());
// console.log("Server running on", process.env.PORT, process.env.HOST);
const server = app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.HOST}:${process.env.PORT}`));


const wordsToNumber=require('./wordsToNumber')


app.post('/to/number', (req, res) => {
  // Conversion logic goes here
  try {
    let number = req.body.words;
    if (number == undefined) {
      res.status(422).json({ error: "Invalid Input" });
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
module.exports = { app, server };
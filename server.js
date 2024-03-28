const express = require('express');

const app = express();

app.use(express.json());

app.listen(3000, () => console.log('Server running on port 3000'));

const wordToNumber = {
    "zero": 0, "one": 1, "two": 2, "three": 3, "four": 4,
    "five": 5, "six": 6, "seven": 7, "eight": 8, "nine": 9,
    "ten": 10, "eleven": 11, "twelve": 12, "thirteen": 13,
    "fourteen": 14, "fifteen": 15, "sixteen": 16, "seventeen": 17,
    "eighteen": 18, "nineteen": 19, "twenty": 20, "thirty": 30,
    "forty": 40, "fifty": 50, "sixty": 60, "seventy": 70,
    "eighty": 80, "ninety": 90, "hundred": 100, "thousand": 1000,
    "million": 1000000
};

function wordsToNumber(words) {
    words = words.toLowerCase().replace(/-/g, " ").replace(/,/g, "");
    let wordArray = words.split(" ");
    let number = 0;
    let currentNumber = 0;
    let lastUnit = 1;
  
    wordArray.forEach(word => {
      if (wordToNumber[word] !== undefined) {
        if (wordToNumber[word] < 100) {
          currentNumber += wordToNumber[word];
        } else {
          if (wordToNumber[word] > lastUnit) {
            number += currentNumber;
            currentNumber = 0;
          }
          if (currentNumber === 0) {
            currentNumber = 1;
          }
          currentNumber *= wordToNumber[word];
          lastUnit = wordToNumber[word];
        }
      } else if (word === "half") {
        number += 0.5;
      } else if (word === "quarter") {
        number += 0.25;
      }
    });
  
    number += currentNumber;
    return number;
  }

app.post('/to/number', (req, res) => {
    // Conversion logic goes here
    try {
        let number = wordsToNumber(req.body.words);
        res.json({ number });
      } catch (error) {
        res.status(433).json({ error: error.message });
      }
});


app.post('/to/words', (req, res) => {
    // Conversion logic goes here
});
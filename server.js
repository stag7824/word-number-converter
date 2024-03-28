const express = require('express');

const app = express();

app.use(express.json());

app.listen(3000, () => console.log('Server running on port 3000'));


app.post('/to/number', (req, res) => {
  // Conversion logic goes here
  console.log("req",req,"res",res);
  return "sup";
});


app.post('/to/words', (req, res) => {
  // Conversion logic goes here
});
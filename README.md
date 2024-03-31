# Word-Number Converter API

This project is an API that converts words to numbers and vice versa. It's built with Node.js and Express, and it's designed to be run in a Docker container.

## Features

The API has two main endpoints:

1. `POST /to/number`: Converts words to numbers. This endpoint accepts a string of words representing a number, handles punctuation and conjunctions like "and", supports decimals up to 2 decimal places and fractions like "half" and "quarter", and supports numbers up to 9,999,999.99.

2. `POST /to/words`: Converts numbers to words. This endpoint accepts a number, supports decimals up to at least 2 decimal places, and supports numbers up to "Nine million nine-hundred thousand nine hundred and ninety-nine point ninety-nine".

## Getting Started

To get started with this project, clone the repository and install the dependencies:

```bash
git clone https://github.com/stag7824/word-number-converter.git
cd word-number-converter
npm install
```

 Then, you can start the server with npm start.

```bash
npm start 
```

## Running the Tests
To run the tests for this project, use the npm test command:

```bash
npm test
```

## Docker
This project includes a Dockerfile that you can use to build and run the API in a Docker container. To do this, first build the Docker image:

```bash
docker build -t word-number-converter .
```
Then, you can run the container:
```bash
docker run -p 3000:3000 word-number-converter
```
### Docker Tests
To run the tests in a Docker container, you can use the following commands:
```bash
docker build -t word-number-converter-test -f Dockerfile.test .
docker run word-number-converter-test
```
## Built With
1. [Node.js](https://nodejs.org/) - The web framework used
2. [Express](https://expressjs.com/) - Used for routing and middleware
3. [Jest](https://jestjs.io/) - Used for testing

## Authors
Syed Talha Ahmed Gardazi


## License
This project is open source and available under the MIT License.

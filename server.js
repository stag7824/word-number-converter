require('dotenv').config();


const app = require('./app');

let server;

if (!server || !server.listening) {
    server = app.listen(process.env.PORT, () => console.log(`Server running on port ${process.env.HOST}:${process.env.PORT}`));
}

module.exports = server;
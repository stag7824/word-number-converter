const server = require('../server');

module.exports = async () => {
    global.__SERVER__ = server;
};
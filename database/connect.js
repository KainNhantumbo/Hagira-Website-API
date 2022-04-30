const moongose = require('mongoose');

// makes a connetion to database
const dbconnect = (host) => moongose.connect(host);

module.exports = dbconnect;

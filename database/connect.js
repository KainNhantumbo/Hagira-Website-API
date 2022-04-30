const moongose = require('moongose');

// makes a connetion to database
const dbconnect = (host) => moongose.connect(host);

module.exports = dbconnect;

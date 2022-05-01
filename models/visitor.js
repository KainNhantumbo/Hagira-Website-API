const mongoose = require('mongoose');

const visitorSchema = new mongoose.Schema({
	visitor: {
		type: Number,
		required: true,
	},
	date: { type: Object },
});

module.exports = mongoose.model('Visitor', visitorSchema);

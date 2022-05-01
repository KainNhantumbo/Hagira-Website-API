const mongoose = require('mongoose');

const visitorSchema = new mongoose.Schema({
	visitor: {
		type: Number,
		required: true,
    maxlength: 5
	},
	date: { type: Object },
});

module.exports = mongoose.model('Visitor', visitorSchema);

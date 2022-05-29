const mongoose = require('mongoose');

const subscriptorSchema = new mongoose.Schema({
	email: {
		type: String,
		maxlength: 30,
		trim: true,
		required: true,
	},
	date: {
		type: Object,
	},
});

module.exports = mongoose.model('Subscriptor', subscriptorSchema);

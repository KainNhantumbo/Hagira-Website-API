const mongoose = require('mongoose');

// newsletter subscriptor schema
const subscriptorSchema = new mongoose.Schema({
	email: {
		type: String,
		maxlength: 30,
    trim: true,
    required: true
	},
	date: {
		type: Object,
	},
});

module.exports = mongoose.model('Subscriptor', subscriptorSchema);

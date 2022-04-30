const mongoose = require('mongoose');

// message schema
const messageSchema = new mongoose.Schema({
	email: {
		type: String,
		maxlength: 30,
		required: true,
		trim: true,
	},
	phone: {
		type: String,
		maxlength: 20,
		trim: true,
	},
	message: {
		type: String,
		maxlength: 2500,
		required: true,
	},
	subject: {
		type: String,
		required: true,
    maxlength: 120
	},
	date: { type: Object },
});

module.exports = mongoose.model('Message', messageSchema);

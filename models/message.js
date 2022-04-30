const mongoose = require('mongoose');

// message schema
const messageSchema = new mongoose.Schema({
	email: {
		type: String,
		required: true,
		trim: true,
	},
	phone: {
		type: String,
		trim: true,
	},
	message: {
		type: String,
		required: true,
	},
	subject: {
		type: String,
		required: true,
	},
	date: { type: Object },
});

module.exports = mongoose.model('Message', messageSchema);

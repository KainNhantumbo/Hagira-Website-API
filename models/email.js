const mongoose = require('mongoose');

// email schema
const emailSchema = new mongoose.Schema({
	to: { type: String, required: true, maxlength: 30 },
	message: { type: String, required: true, maxlength: 5000 },
	subject: { type: String, required: true, maxlength: 150 },
});

module.exports = mongoose.model('Email', emailSchema);

const mongoose = require('mongoose');

// email schema
const emailSchema = new mongoose.Schema({
	to: { type: String, maxlength: 30 },
	from: { type: String, maxlength: 30 },
	message: { type: String, maxlength: 5000 },
	subject: { type: String, maxlength: 150 },
});

module.exports = mongoose.model('Email', emailSchema);

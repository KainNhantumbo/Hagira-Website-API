const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: [true, 'Must provide a user name.'],
		maxlength: [200, 'The name provided is too long.'],
		minlength: [5, 'The name provided is too short.'],
	},
	email: {
		type: String,
		required: [true, 'Please provide a user e-mail.'],
		trim: true,
		match: [
			/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
			'Please provide a valid email.',
		],
		unique: true,
	},
	password: {
		type: String,
		required: [true, 'Must provide a password.'],
		minlength: [6, 'Password must have at least 6 characters.'],
	},
});

// bcrypt password encryption
userSchema.pre('save', async function () {
	const salt = await bcrypt.genSalt(10);
	this.password = await bcrypt.hash(this.password, salt);
});

module.exports = mongoose.model('User', userSchema);

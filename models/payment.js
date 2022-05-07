const mongoose = require('mongoose');

const paymentSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
		maxlength: 100,
	},
	surname: {
		type: String,
		required: true,
		trim: true,
		maxlength: 100,
	},
	phone: {
		type: String,
		required: true,
		trim: true,
		maxlength: 20,
	},
	email: {
		type: String,
		required: true,
		trim: true,
		maxlength: 30,
	},
	quantity: {
		type: String,
		required: true,
		trim: true,
		maxlength: 3,
	},
	city: {
		type: String,
		required: true,
		trim: true,
		maxlength: 100,
	},
	neighbourhood: {
		type: String,
		required: true,
		trim: true,
		maxlength: 100,
	},
	post_number: {
		type: String,
		required: false,
		trim: true,
		maxlength: 10,
	},
	adress: {
		type: String,
		required: true,
		trim: true,
		maxlength: 150,
	},
	payment_method: {
		type: String,
		required: true,
		trim: true,
		maxlength: 10,
	},
	payment_value: {
		type: String,
		required: true,
		trim: true,
		maxlength: 10,
	},
	comment: {
		type: String,
		required: false,
		trim: true,
		maxlength: 2500,
	},
});

module.exports = mongoose.model('Payment', paymentSchema);

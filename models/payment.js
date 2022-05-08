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
		maxlength: 150,
	},
	payment_method: {
		type: String,
		required: true,
		trim: true,
		maxlength: 20,
	},
	date: {
		type: Object,
		required: true,
	},
	payment_value: {
		type: String,
		required: true,
		trim: true,
		maxlength: 10,
	},
	comment: {
		type: String,
		maxlength: 2500,
	},
	paid_product_id: {
		type: String,
	},
	paid_product_name: {
		type: String,
	},
	paid_product_price: {
		type: String,
	},
	createdAt: {
		type: Date,
		default: Date.now()
	}
});

module.exports = mongoose.model('Payment', paymentSchema);

const mongoose = require('mongoose');

// product schema
const productSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true,
		maxlength: 20,
	},
	description: {
		type: String,
		maxlength: 2500,
		required: true,
		trim: false,
	},
	variant_colors: {
		type: Array,
		maxlength: 4,
		required: true,
	},
	color: {
		type: String,
		maxlength: 30,
		required: true,
		trim: true,
		default: 'Não especificada.',
	},
	fabric: {
		type: String,
		maxlength: 30,
		required: true,
		trim: true,
	},
	class: {
		type: String,
		required: true,
	},
	request_type: {
		type: String,
		required: true,
	},
	estimated_delivery_day: {
		type: String,
		maxlength: 3,
		default: '1',
		trim: true,
	},
	size: {
		type: String,
		maxlength: 30,
		trim: true,
	},
	date: {
		type: Object,
		required: true,
	},
	createdAt: {
		type: Date,
		default: Date.now(),
	},
	price: {
		type: String,
		maxlength: 10,
		required: true,
		trim: true,
	},
	width: { type: String, trim: true },
	height: { type: String, trim: true },
	category: { type: String },
	image: { type: String, required: true },
});

module.exports = mongoose.model('Product', productSchema);

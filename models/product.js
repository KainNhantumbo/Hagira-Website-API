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
		required: 2500,
		trim: false,
	},
	colors: {
		type: Array,
	},
	default_color: {
		type: String,
		maxlength: 30,
		trim: true,
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
	sell_type: {
		type: String,
		required: true,
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
	price: {
		type: String,
		maxlength: 10,
		required: true,
		trim: true,
	},
	width: { type: String, trim: true },
	height: { type: String, trim: true },
	category: { type: String },
	image: { type: String },
});

module.exports = mongoose.model('Product', productSchema);

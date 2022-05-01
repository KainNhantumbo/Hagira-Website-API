const express = require('express');
const router = express.Router();
const Product = require('../models/product');

router
	.route('/products')
	.get(async (req, res) => {
		try {
			const products = await Product.find({});
			res
				.status(200)
				.json({ results: products.length, products, status: 'sucessfull' });
		} catch (err) {
			res.status(500).json({ err });
		}
	})
	.post(async (req, res) => {
		try {
			await Product.create(req.body);
			res.status(201).json({ status: 'Created sucessfully' });
		} catch (err) {
			res.status(500).json({ err });
		}
	});

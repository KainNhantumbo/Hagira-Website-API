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
	})
	.delete(async (req, res) => {
		try {
			await Product.deleteMany({});
			res.status(200).json({ status: 'Deleted sucessfully' });
		} catch (err) {
			res.status(500).json({ err });
		}
	});

router
	.route('products/:id')
	.get(async (req, res) => {
		try {
			const product_id = req.params.id;
			const product = await Product.findOne({ _id: product_id });
			res.status(200).json({ product, status: 'sucessfull' });
		} catch (err) {
			res.status(500).json({ err });
		}
	})
	.delete(async (req, res) => {
		try {
			const product_id = req.params.id;
			await Product.findOneAndDelete({ _id: product_id });
			res.status(200).json({ status: 'Deleted sucessfully' });
		} catch (err) {
			res.status(500).json({ err });
		}
	})
	.patch(async (req, res) => {
		try {
			const product_id = req.params.id;
			await Product.findOneAndUpdate({ _id: product_id });
			res.status(200).json({ status: 'Updated sucessfully' });
		} catch (err) {
			res.status(500).json({ err });
		}
	});

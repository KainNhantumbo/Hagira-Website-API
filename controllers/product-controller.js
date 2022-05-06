const Product = require('../models/product');

// gets all database products
const getAllProducts = async (req, res) => {
	try {
		const {} = req.query
		
		
		const products = await Product.find({});


		res
			.status(200)
			.json({ results: products.length, products, status: 'sucessfull' });
	} catch (err) {
		res.status(500).json({ err });
	}
};

// creates a new product
const createProduct = async (req, res) => {
	try {
		await Product.create(req.body);
		res.status(201).json({ status: 'Created sucessfully' });
	} catch (err) {
		res.status(500).json({ err });
	}
};

// deletes all produts from database
const deleteAllProducts = async (req, res) => {
	try {
		await Product.deleteMany({});
		res.status(200).json({ status: 'Deleted sucessfully' });
	} catch (err) {
		res.status(500).json({ err });
	}
};

// gets a single product
const getProduct = async (req, res) => {
	try {
		const product_id = req.params.id;
		const product = await Product.findOne({ _id: product_id });
		res.status(200).json({ product, status: 'sucessfull' });
	} catch (err) {
		res.status(500).json({ err });
	}
};

// deletes a product
const deleteProduct = async (req, res) => {
	try {
		const product_id = req.params.id;
		await Product.findOneAndDelete({ _id: product_id });
		res.status(200).json({ status: 'Deleted sucessfully' });
	} catch (err) {
		res.status(500).json({ err });
	}
};

// updates a product
const updateProduct = async (req, res) => {
	try {
		const product_id = req.params.id;
		await Product.findOneAndUpdate({ _id: product_id });
		res.status(200).json({ status: 'Updated sucessfully' });
	} catch (err) {
		res.status(500).json({ err });
	}
};

module.exports = {
	getAllProducts,
	createProduct,
	deleteAllProducts,
	deleteProduct,
	getProduct,
	updateProduct,
};

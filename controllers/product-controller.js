const Product = require('../models/product');

// gets all database products
const getAllProducts = async (req, res) => {
	try {
		const {
			product_name,
			product_class,
			product_category,
			product_sort,
			product_fields,
			product_limit,
			product_skip,
		} = req.query;
		const query_params = {};

		if (product_name) {
			query_params.name = { $regex: product_name, $options: 'i' };
		}
		if (product_class) {
			query_params.class = product_class;
		}
		if (product_category) {
			query_params.category = product_category;
		}

		// returns results based on query params
		let result = Product.find(query_params);

		if (product_sort) {
			const sortList = product_sort.split(',').join(' ');
			result = result.sort(sortList);
		}

		if (product_fields) {
			const fieldList = product_fields.split(',').join(' ');
			result = result.select(fieldList);
		}
		// places a limit of results
		if (product_limit) {
			result = result.limit(Number(product_limit));
		}
		// skips results
		if (product_skip) {
			result = result.skip(Number(product_skip));
		}

		const products = await result;
		res.status(200).json({ results: products.length, products });
	} catch (err) {
		res.status(500).json({ err });
	}
};

// creates a new product
const createProduct = async (req, res) => {
	try {
		await Product.create(req.body);
		res.status(201).json({ message: 'Created successfully.' });
	} catch (err) {
		res.status(500).json({ err });
	}
};

// deletes all produts from database
const deleteAllProducts = async (req, res) => {
	try {
		await Product.deleteMany({});
		res.status(200).json({ message: 'Deleted successfully.' });
	} catch (err) {
		res.status(500).json({ err });
	}
};

// gets a single product
const getProduct = async (req, res) => {
	try {
		const product_id = req.params.id;
		const product = await Product.findOne({ _id: product_id });
		res.status(200).json({ product });
	} catch (err) {
		res.status(500).json({ err });
	}
};

// deletes a product
const deleteProduct = async (req, res) => {
	try {
		const product_id = req.params.id;
		await Product.findOneAndDelete({ _id: product_id });
		res.status(200).json({ message: 'Deleted successfully.' });
	} catch (err) {
		res.status(500).json({ err });
	}
};

// updates a product
const updateProduct = async (req, res) => {
	try {
		const product_id = req.params.id;
		await Product.findOneAndUpdate({ _id: product_id });
		res.status(200).json({ message: 'Updated successfully.' });
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

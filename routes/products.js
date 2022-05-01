const express = require('express');
const router = express.Router();
const {
	getAllProducts,
	deleteProduct,
	createProduct,
	deleteAllProducts,
	getProduct,
	updateProduct,
} = require('../controllers/product-controller');

router
	.route('/products')
	.get(getAllProducts)
	.post(createProduct)
	.delete(deleteAllProducts);

router
	.route('products/:id')
	.get(getProduct)
	.delete(deleteProduct)
	.patch(updateProduct);

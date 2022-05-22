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
const auth = require('../middlewares/auth');

router
	.route('/')
	.get(getAllProducts)
	.post(auth, createProduct)
	.delete(auth, deleteAllProducts);

router
	.route('/:id')
	.get(getProduct)
	.delete(auth, deleteProduct)
	.patch(auth, updateProduct);

module.exports = router;

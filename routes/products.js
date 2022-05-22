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
	.route('/')
	.get(getAllProducts)
	.post(createProduct)
	.delete(deleteAllProducts);

router.route('/:id').get(getProduct).delete(deleteProduct).patch(updateProduct);

module.exports = router;

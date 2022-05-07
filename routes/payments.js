const express = require('express');
const router = express.Router();
const {
	deletePayment,
	getAllPayments,
	createPayment,
} = require('../controllers/payment-controller');

// get and create routes
router.route('/').get(getAllPayments).post(createPayment);

// delete routes
router.route('/:id').delete(deletePayment);

module.exports = router;

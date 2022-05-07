const express = require('express');
const router = express.Router();
const {
	deletePayment,
	getAllPayments,
	createPayment,
} = require('../controllers/payment-controller');

// get and create routes
router.route('/payments').get(getAllPayments).post(createPayment);

// delete routes
router.route('/payments/:id').delete(deletePayment);

module.exports = router;

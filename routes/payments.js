const express = require('express');
const router = express.Router();
const {
	deletePayment,
	getAllPayments,
	createPayment,
} = require('../controllers/payment-controller');
const auth = require('../middlewares/auth');

router.route('/').get(auth, getAllPayments).post(createPayment);

router.route('/:id').delete(auth, deletePayment);

module.exports = router;

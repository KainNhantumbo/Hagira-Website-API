const Payment = require('../models/payment');

// gets all payments fromm database
const getAllPayments = async (req, res) => {
	try {
		const payments = await Payment.find({});
		res.status(200).json({ results: payments.length, payments });
	} catch (err) {
		res.status(500).json({ err });
	}
};

// creates a payment record
const createPayment = async (req, res) => {
	try {
		const data = req.body;
		await Payment.create(data);
		res.status(201).json({ status: 'Created sucessfully' });
	} catch (err) {
		res.status(500).json({ err });
	}
};

// delete payments
const deletePayment = async (req, res) => {
	try {
		const { id: payment_id } = req.params;
		await Payment.findOneAndDelete({ _id: payment_id });
		res.status(200).json({ status: 'Deleted sucessfully' });
	} catch (err) {
		res.status(500).json({ err });
	}
};

module.exports = {
	getAllPayments,
	createPayment,
	deletePayment,
};

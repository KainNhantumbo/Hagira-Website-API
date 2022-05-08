const Payment = require('../models/payment');

// gets all payments fromm database
const getAllPayments = async (req, res) => {
	try {
		const { sort, search } = req.query;
		const query_params = {};

		if (search) {
			query_params.search = { $regex: search, $options: 'i' };
		}
		let result = Payment.find(query_params);

		if (sort) {
			let sortList = sort.split(',').join(' ');
			result = result.sort(sortList);
		} else {
			result = result.sort('name');
		}

		const payments = await result;
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

const Payment = require('../models/payment');
const express = require('express');
const router = express.Router();

router
	.route('/')
	.get(async (req, res) => {
		try {
			const payments = await Payment.find({});
			res.status(200).json({ results: payments.length, payments });
		} catch (err) {
			res.status(500).json({ err });
		}
	})
	.post(async (req, res) => {
		try {
			const data = req.body;
			await Payment.create(data);
			res.status(201).json({ status: 'Created sucessfully' });
		} catch (err) {
			res.status(500).json({ err });
		}
	});

router.route('/:id').delete(async (req, res) => {
	try {
		const { id: payment_id } = req.params;
		await Payment.findOneAndDelete({ _id: payment_id });
		res.status(200).json({ status: 'Deleted sucessfully' });
	} catch (err) {
		res.status(500).json({ err });
	}
});
module.exports = router;

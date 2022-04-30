const express = require('express');
const router = express.Router();
const Subscriptor = require('../models/subscriptor');

router
	.route('/newsletter')
	.get(async (req, res) => {
		try {
			const subscriptions = await Subscriptor.find({});
			res.status(200).json({ subscriptions, status: 'sucess' });
		} catch (err) {
			res.status(500).json({ err });
		}
	})
	.post(async (req, res) => {
		try {
			const subscription = await Subscriptor.create(req.body);
			res.status(201).json({ subscription, status: 'sucess' });
		} catch (err) {
			res.status(500).json({ err });
		}
	});

router.route('/newsletter/:id').delete(async (req, res) => {
	try {
		const { id: subscriptor_id } = req.params;
		await Subscriptor.findOneAndDelete({
			_id: subscriptor_id,
		});
		res.status(200).json({ status: 'deleted' });
	} catch (err) {
		res.status(500).json({ err });
	}
});

module.exports = router;

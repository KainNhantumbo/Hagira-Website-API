const express = require('express');
const router = express.Router();
const Message = require('../models/message');

router
	.route('/messages')
	.get(async (req, res) => {
		try {
			const messages = await Message.find({});
			res
				.status(200)
				.json({ results: messages.length, messages, status: 'sucessfull' });
		} catch (err) {
			res.status(500).json({ err });
		}
	})
	.post(async (req, res) => {
		try {
			const message = req.body;
			await Message.create(message);
			res.status(201).json({ status: 'Created sucessfully' });
		} catch (err) {
			res.status(500).json({ err });
		}
	});

router.route('/messages/:id').delete(async (req, res) => {
	try {
		const { id: message_id } = req.params;
		await Message.findOneAndDelete({ _id: message_id });
		res.status(201).json({ status: 'Deleted sucessfully' });
	} catch (err) {
		res.status(500).json({ err });
	}
});

module.exports = router;

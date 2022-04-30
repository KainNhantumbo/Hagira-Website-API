const express = require('express');
const router = express.Router();
const Message = require('../models/message');

router.route('/messages').get(async (req, res) => {
	try {
		const messages = await Message.find({});
		res
			.status(200)
			.json({ results: messages.length, messages, status: 'sucessfull' });
	} catch (err) {
		res.status(500).json({ err });
	}
});

module.exports = router;

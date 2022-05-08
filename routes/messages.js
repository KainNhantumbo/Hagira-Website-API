const express = require('express');
const router = express.Router();
const {
	getMessages,
	createMessage,
	deleteMessage,
	deleteAllMessages,
} = require('../controllers/message-controller');

router
	.route('/messages')
	.get(getMessages)
	.post(createMessage)
	.delete(deleteAllMessages);

router.route('/messages/:id').delete(deleteMessage);

module.exports = router;

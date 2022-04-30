const express = require('express');
const router = express.Router();
const {
	getMessages,
	createMessage,
	deleteMessage,
} = require('../controllers/message-controller');

router.route('/messages').get(getMessages).post(createMessage);

router.route('/messages/:id').delete(deleteMessage);

module.exports = router;

const express = require('express');
const router = express.Router();
const {
	getMessages,
	createMessage,
	deleteMessage,
	deleteAllMessages,
} = require('../controllers/message-controller');
const auth = require('../middlewares/auth');

router
	.route('/')
	.get(auth, getMessages)
	.post(createMessage)
	.delete(auth, deleteAllMessages);

router.route('/:id').delete(auth, deleteMessage);

module.exports = router;

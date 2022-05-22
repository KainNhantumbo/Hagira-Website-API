const express = require('express');
const router = express.Router();
const {
	getSubscriptors,
	createSubscriptor,
	deleteSubscriptor,
	deleteAllSubscriptors,
} = require('../controllers/subscriptor-controller');
const auth = require('../middlewares/auth');

router
	.route('/')
	.get(auth, getSubscriptors)
	.post(createSubscriptor)
	.delete(auth, deleteAllSubscriptors);

router.route('/:id').delete(auth, deleteSubscriptor);

module.exports = router;

const express = require('express');
const router = express.Router();
const {
	getSubscriptors,
	createSubscriptor,
	deleteSubscriptor,
	deleteAllSubscriptors,
} = require('../controllers/subscriptor-controller');

router.route('/').get(getSubscriptors).post(createSubscriptor).delete(deleteAllSubscriptors);

router.route('/:id').delete(deleteSubscriptor);

module.exports = router;

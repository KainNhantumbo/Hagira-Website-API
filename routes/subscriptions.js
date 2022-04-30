const express = require('express');
const router = express.Router();
const {
	getSubscriptors,
	createSubscriptor,
	deleteSubscriptor,
} = require('../controllers/subscriptor-controller');

router.route('/newsletter').get(getSubscriptors).post(createSubscriptor);

router.route('/newsletter/:id').delete(deleteSubscriptor);

module.exports = router;

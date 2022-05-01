const express = require('express');
const router = express.Router();
const {
	getVisitors,
	createVisitor,
	deleteVisitors,
} = require('../controllers/visitor-controller');

router
	.route('/visitor')
	.get(getVisitors)
	.post(createVisitor)
	.delete(deleteVisitors);

module.exports = router;

const express = require('express');
const router = express.Router();
const {
	getVisitors,
	createVisitor,
	deleteVisitors,
} = require('../controllers/visitor-controller');
const auth = require('../middlewares/auth');

router
	.route('/')
	.get(auth, getVisitors)
	.post(createVisitor)
	.delete(auth, deleteVisitors);

module.exports = router;

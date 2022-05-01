const express = require('express');
const router = express.Router();
const {
	getAllEmails,
	createEmail,
	deleteAllEmails,
	deleteEmail,
} = require('../controllers/email-controller');

router
	.route('/emails')
	.get(getAllEmails)
	.post(createEmail)
	.delete(deleteAllEmails);

router.route('/emails/:id').delete(deleteEmail);

module.exports = router;

const emailSender = require('../services/email-service');

// creates a new email
const createEmail = async (req, res) => {
	try {
		await emailSender(req.body);
		res.status(201).json({ status: 'Created successfully' });
	} catch (err) {
		res.status(500).json({ err });
	}
};

module.exports = { createEmail };

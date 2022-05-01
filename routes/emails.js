const express = require('express');
const router = express.Router();
const Email = require('../models/email');

router
	.route('/emails')
	.get(async (req, res) => {
		try {
			const emails = await Email.find({});
			res.status(200).json({ results: emails.length, emails });
		} catch (err) {
			res.status(500).json({ err });
		}
	})
	.post(async (req, res) => {
		try {
			await Email.create(req.body);
			res.status(201).json({ status: 'Created sucessfully' });
		} catch (err) {
			res.status(500).json({ err });
		}
	})
	.delete(async (req, res) => {
		try {
			await Email.deleteMany({});
			res.status(200).json({ status: 'Deleted sucessfully' });
		} catch (error) {
			res.status(500).json({ err });
		}
	});

router.route('/emails/:id').delete(async (req, res) => {
	try {
		const email_id = req.params.id;
		await Email.findOneAndDelete({ _id: email_id });
		res.status(200).json({ status: 'Deleted sucessfully.' });
	} catch (err) {
		res.status(500).json({ err });
	}
});

module.exports = router;

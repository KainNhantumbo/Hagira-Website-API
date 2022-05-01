const express = require('express');
const router = express.Router();
const Visitor = require('../models/visitor');

router
	.route('/visitor')
	.get(async (req, res) => {
		try {
			const visitors = Visitor.find({});
			res
				.status(200)
				.json({ results: (await visitors).length, status: 'sucessfull' });
		} catch (err) {
			res.status(500).json({ err });
		}
	})
	.post(async (req, res) => {
		try {
			await Visitor.create(req.body);
			res.status(201).json({ status: 'Created sucessfully' });
		} catch (err) {
			res.status(500).json({ err });
		}
	})
	.delete(async (req, res) => {
		try {
			await Visitor.deleteMany({});
			res.status(200).json({ status: 'sucessfull' });
		} catch (err) {
			res.status(500).json({ err });
		}
	});

module.exports = router;

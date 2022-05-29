const Visitor = require('../models/visitor');

const getVisitors = async (req, res) => {
	try {
		const visitors = Visitor.find({});
		res
			.status(200)
			.json({ results: (await visitors).length, status: 'sucessfull' });
	} catch (err) {
		res.status(500).json({ err });
	}
};

const createVisitor = async (req, res) => {
	try {
		await Visitor.create(req.body);
		res.status(201).json({ status: 'Created sucessfully' });
	} catch (err) {
		res.status(500).json({ err });
	}
};

const deleteVisitors = async (req, res) => {
	try {
		await Visitor.deleteMany({});
		res.status(200).json({ status: 'sucessfull' });
	} catch (err) {
		res.status(500).json({ err });
	}
};

module.exports = { deleteVisitors, getVisitors, createVisitor };

const Visitor = require('../models/visitor');

// gets all visitors from database
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

// creates a visitor
const createVisitor = async (req, res) => {
	try {
		await Visitor.create(req.body);
		res.status(201).json({ status: 'Created sucessfully' });
	} catch (err) {
		res.status(500).json({ err });
	}
};

// deletes all visitor records from database
const deleteVisitors = async (req, res) => {
	try {
		await Visitor.deleteMany({});
		res.status(200).json({ status: 'sucessfull' });
	} catch (err) {
		res.status(500).json({ err });
	}
};

module.exports = { deleteVisitors, getVisitors, createVisitor };

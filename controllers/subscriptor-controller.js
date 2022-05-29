const Subscriptor = require('../models/subscriptor');

const getSubscriptors = async (req, res) => {
	try {
		const subscriptions = await Subscriptor.find({});
		res
			.status(200)
			.json({
				results: subscriptions.length,
				subscriptions,
				status: 'sucessfull',
			});
	} catch (err) {
		res.status(500).json({ err });
	}
};

const deleteAllSubscriptors = async (req, res) => {
	try {
		await Subscriptor.deleteMany({});
		res.status(200).json({ status: 'Data erased sucessfully' });
	} catch (err) {
		res.status(500).json({ err });
	}
};

const createSubscriptor = async (req, res) => {
	try {
		await Subscriptor.create(req.body);
		res.status(201).json({ status: 'Created sucessfully' });
	} catch (err) {
		res.status(500).json({ err });
	}
};

const deleteSubscriptor = async (req, res) => {
	try {
		const { id: subscriptor_id } = req.params;
		await Subscriptor.findOneAndDelete({
			_id: subscriptor_id,
		});
		res.status(200).json({ status: 'Deleted sucessfully' });
	} catch (err) {
		res.status(500).json({ err });
	}
};

module.exports = {
	getSubscriptors,
	createSubscriptor,
	deleteSubscriptor, deleteAllSubscriptors
};

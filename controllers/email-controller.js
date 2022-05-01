const Email = require('../models/email');

//  gets all emails from database
const getAllEmails = async (req, res) => {
	try {
		const emails = await Email.find({});
		res.status(200).json({ results: emails.length, emails });
	} catch (err) {
		res.status(500).json({ err });
	}
};

// creates a new email
const createEmail = async (req, res) => {
	try {
		await Email.create(req.body);
		res.status(201).json({ status: 'Created sucessfully' });
	} catch (err) {
		res.status(500).json({ err });
	}
};

//  deletes all emails
const deleteAllEmails = async (req, res) => {
	try {
		await Email.deleteMany({});
		res.status(200).json({ status: 'Deleted sucessfully' });
	} catch (error) {
		res.status(500).json({ err });
	}
};

// deletes a single email record by its id
const deleteEmail = async (req, res) => {
	try {
		const email_id = req.params.id;
		await Email.findOneAndDelete({ _id: email_id });
		res.status(200).json({ status: 'Deleted sucessfully.' });
	} catch (err) {
		res.status(500).json({ err });
	}
};

module.exports = { getAllEmails, createEmail, deleteAllEmails, deleteEmail };

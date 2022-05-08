const Message = require('../models/message');

// gets all messages
const getMessages = async (req, res) => {
	try {
		const messages = await Message.find({});
		res
			.status(200)
			.json({ results: messages.length, messages, status: 'sucessfull' });
	} catch (err) {
		res.status(500).json({ err });
	}
};

// creates a message
const createMessage = async (req, res) => {
	try {
		const message = req.body;
		await Message.create(message);
		res.status(201).json({ status: 'Created sucessfully' });
	} catch (err) {
		res.status(500).json({ err });
	}
};

// deletes all messages
const deleteAllMessages = async (req, res) => {
	try {
		await Message.deleteMany({});
		res.status(200).json({ status: 'Deleted all records sucessfully' });
	} catch (err) {
		res.status(500).json({ err });
	}
};

// deletes a message
const deleteMessage = async (req, res) => {
	try {
		const { id: message_id } = req.params;
		await Message.findOneAndDelete({ _id: message_id });
		res.status(200).json({ status: 'Deleted sucessfully' });
	} catch (err) {
		res.status(500).json({ err });
	}
};

module.exports = { getMessages, createMessage, deleteAllMessages, deleteMessage };

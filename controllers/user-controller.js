const User = require('../models/User');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const env = require('dotenv');

// loads environment variables
env.config();

// generates a token
const generateToken = (user) =>
	new Promise((resolve) => {
		const newUserToken = jwt.sign(
			{ user_name: user.name, user_id: user._id },
			process.env.SECRET_TOKEN,
			{
				expiresIn: '1d',
			}
		);
		resolve(newUserToken);
	});

// register a user to system
const register = async (req, res) => {
	try {
		const { name, email, password } = req.body;
		const user = await User.create({ name, email, password });
		const token = await generateToken(user);
		res.status(201).json({ token, message: 'User created.' });
	} catch (err) {
		res.status(500).json({ err });
	}
};

// logs user to system
const login = async (req, res) => {
	const { email, password } = req.body;
	try {
		if (!password || email)
			return res
				.status(400)
				.json({ message: 'Please, provide email and password.' });
		const user = await User.findOne({ email: email });
		if (!user)
			return res
				.status(401)
				.json({ message: 'User with provided e-mail not found.' });
		// compares given password with user actually password
		const match = await bcrypt.compare(password, user.password);
		if (!match)
			return res.status(401).json({ message: 'Wrong password, try again.' });

		const token = await generateToken(user);
		res.status(200).json({ token });
	} catch (err) {
		res.status(500).json({ err });
	}
};

module.exports = { register, login };

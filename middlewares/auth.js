const jwt = require('jsonwebtoken');
const env = require('dotenv');

// environment config
env.config();

// a asynchronous function to verify integrity of the token
const verifyToken = (token) =>
	new Promise((resolve) => {
		const result = jwt.verify(token, process.env.SECRET_TOKEN);
		resolve(result);
	});

// function that  verifies that user access
const auth = async (req, res, next) => {
	try {
		const authHeader = req.headers.authorization;
		if (!authHeader || !authHeader.startsWith('Bearer '))
			return res.status(401).json({ message: 'Invalid authentication.' });
		const user_token = authHeader.split(' ')[1];
		const payload = await verifyToken(user_token);
		// populates the request object with user data
		req.user = { user_id: payload.user_id };
		next();
	} catch (err) {
		if (err.message === 'jwt malformed') {
			return res
				.status(401)
				.json({ code: 'ERR_BAD_REQUEST', message: 'Invalid authentication.' });
		}
		res.status(500).json({ err });
	}
};

module.exports = auth;

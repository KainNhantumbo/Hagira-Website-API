const express = require('express');
const app = express();
const env = require('dotenv');
const db_connetion = require('./database/connect');

// middlewares
app.use(express.json());

// config
env.config();

// loading
const PORT = process.env.PORT || 4630;

// starts the server
const start_server = async () => {
	try {
		await db_connetion(PORT);
		app.listen(PORT, console.log(`Server running on ${PORT}...`));
	} catch (e) {
		console.log(e);
	}
};

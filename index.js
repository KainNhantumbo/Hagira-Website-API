const express = require('express');
const app = express();
const env = require('dotenv');
const db_connetion = require('./database/connect');
const messageRoutes = require('./routes/messages');
const subscriptorRoutes = require('./routes/subscriptions');
const visitorRoutes = require('./routes/visitors');
const productRoutes = require('./routes/products');
const not_foundRoute = require('./middlewares/not-found');
const cors = require('cors');

// middlewares

	// environment config
	env.config();

	// cors config
	app.use(cors({origin: 'http://localhost:3000'}));
	
	// body parser
	app.use(express.json({limit: '800000'}));
	
	// routes
	app.use('/api/v1', subscriptorRoutes);
	app.use('/api/v1', messageRoutes);
	app.use('/api/v1', visitorRoutes);
	app.use('/api/v1', productRoutes);
	app.use(not_foundRoute);

// loading the port
const PORT = process.env.PORT || 4630;

// starts the server
const start_server = async () => {
	try {
		await db_connetion(process.env.MONGO_URI);
		app.listen(PORT, console.log(`Server running on ${PORT}...`));
	} catch (e) {
		console.log(e);
	}
};

start_server();

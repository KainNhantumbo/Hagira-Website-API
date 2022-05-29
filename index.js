const express = require('express');
const app = express();
const env = require('dotenv');
const db_connetion = require('./database/connect');
const messageRoutes = require('./routes/messages');
const subscriptorRoutes = require('./routes/subscriptions');
const visitorRoutes = require('./routes/visitors');
const usersRoutes = require('./routes/users');
const productRoutes = require('./routes/products');
const emailRoutes = require('./routes/emails');
const paymentRoutes = require('./routes/payments');
const not_foundRoute = require('./middlewares/not-found');
const cors = require('cors');

// environment config
env.config();

// security
const helmet = require('helmet');
const xssCleaner = require('xss-clean');
const rateLimiter = require('express-rate-limit');
const limiter = rateLimiter({
	windowMs: 10 * 60 * 1000,
	max: 100,
	standardHeaders: true,
	legacyHeaders: false,
});

app.use(limiter);
app.use(helmet())
app.use(xssCleaner());
app.use(cors({ origin: process.env.CLIENT }));
app.use(express.json({ limit: '800000' }));

// routes
app.use('/api/v1/newsletter', subscriptorRoutes);
app.use('/api/v1/messages', messageRoutes);
app.use('/api/v1/visitors', visitorRoutes);
app.use('/api/v1/products', productRoutes);
app.use('/api/v1/emails', emailRoutes);
app.use('/api/v1/payments', paymentRoutes);
app.use('/api/v1/users', usersRoutes);
app.use(not_foundRoute);

// loading the port
const PORT = process.env.PORT || 4630;

// starts the server
const start_server = async () => {
	try {
		await db_connetion(process.env.MONGO_URI);
		app.listen(PORT, console.log(`Server running on ${PORT}...`));
	} catch (err) {
		console.log(err);
	}
};

start_server();

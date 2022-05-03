const nodeMailer = require('nodemailer');
const env = require('dotenv');

// environment configuration
env.config();

// email sending configuration
const emailSender = async (email) => {
	try {
		const message = {
			from: process.env.EMAIL_ACCOUNT,
			to: email.to,
			subject: email.subject,
			text: email.message,
		};

		// transport config
		const transporter = nodeMailer.createTransport({
			service: 'gmail', //smtp.gmail.com
			host: 587, //service host eg. smtp.umbler.com ssl/tls port
			secure: false, //if it is secure depending on used host port
			auth: {
				user: process.env.EMAIL_ACCOUNT,
				pass: process.env.EMAIL_PASSWORD,
			},
		});

		// sends the email message
		const info = await transporter.sendMail(message);
		console.log(info);
	} catch (err) {
		console.log(err);
	}
};

module.exports = emailSender;

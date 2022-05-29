const nodeMailer = require('nodemailer');
const env = require('dotenv');

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
			service: 'gmail', 
			host: 587, 
			secure: false, //if it is secure depending on used host port
			auth: {
				user: process.env.EMAIL_ACCOUNT,
				pass: process.env.EMAIL_PASSWORD,
			},
		});
		const info = await transporter.sendMail(message);
		console.log(info);
	} catch (err) {
		console.log(err);
	}
};

module.exports = emailSender;

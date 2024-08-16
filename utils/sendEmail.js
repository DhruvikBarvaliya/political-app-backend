const nodemailer = require('nodemailer');
const config = require('../config/config');

const sendEmail = async (options) => {
  const transporter = nodemailer.createTransport({
    host: config.emailService.host,
    port: config.emailService.port,
    auth: {
      user: config.emailService.user,
      pass: config.emailService.pass,
    },
  });

  const mailOptions = {
    from: config.emailService.user,
    to: options.to,
    subject: options.subject,
    text: options.text,
  };

  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;

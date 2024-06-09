const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_SERVICE,
  auth: {
    user: process.env.EMAIL_USERNAME,
    pass: process.env.EMAIL_PASSWORD,
  },
});

exports.sendEmail = async ({ to, sender, subject, html, attachments, text }) => {
  try {
    const from = process.env.EMAIL_USERNAME;

    const mailOptions = {
      from: `Tawassol App ${from}`,
      to: to,
      subject: subject,
      html: html,
      attachments: attachments,
      text: text,
    };

    return transporter.sendMail(mailOptions);
  } catch (error) {
    console.log(error);
  }
};
// mailService.js
const nodemailer = require('nodemailer');

// Set up your SMTP server settings
const transporter = nodemailer.createTransport({
  host: 'smtp.example.com', // Your SMTP server host
  port: 587,                // Your SMTP server port; 587 is common for non-SSL connections
  secure: false,            // True for 465 (SSL), false for other ports
  auth: {
    user: 'your-email@example.com', // Your email address
    pass: 'your-password',          // Your email password
  },
});

/**
 * Send an email with a PDF attachment.
 * @param {Buffer} pdfBuffer - The PDF file as a Buffer.
 * @param {string} recipientEmail - The recipient's email address.
 * @param {Function} callback - A callback function to handle the response.
 */
function sendEmail(pdfBuffer, recipientEmail, callback) {
  const mailOptions = {
    from: 'your-email@example.com', // Sender address
    to: recipientEmail,             // List of recipients
    subject: 'Your Subject Here',   // Subject line
    text: 'Email Body or message',  // Plain text body
    attachments: [
      {
        filename: 'attachment.pdf', // Name of the file as it will appear in the email
        content: pdfBuffer,         // The PDF Buffer
      },
    ],
  };

  transporter.sendMail(mailOptions, callback);
}

module.exports = { sendEmail };

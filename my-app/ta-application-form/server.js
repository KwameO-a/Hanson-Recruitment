const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Applicant = require('./models/applicant'); // Adjust the path as necessary
const { createPDF } = require('./utils/pdfService'); // Adjust the path as necessary
const { sendEmail } = require('./Services/mailService'); // Adjust the path as necessary
const app = express();

app.use(bodyParser.json());

// Make sure to replace 'your-mongodb-connection-string' with your actual MongoDB connection string.
mongoose.connect('your-mongodb-connection-string', { useNewUrlParser: true, useUnifiedTopology: true });

app.post('/submit-form', async (req, res) => {
  try {
    // Save applicant data to the database
    const applicantData = req.body;
    const applicant = new Applicant(applicantData);
    await applicant.save();
    
    // Generate the PDF from form data
    // Assuming createPDF function now properly returns a Buffer or Stream
    const pdfBuffer = await createPDF(applicantData); // Adjust this based on your implementation

    // Convert PDF buffer/stream to a format suitable for nodemailer attachments
    const attachments = [{
      filename: 'application_form.pdf',
      content: pdfBuffer,
    }];

    // Specify the recipient's email address dynamically or use a fixed address for testing
    const recipientEmail = 'recipient@example.com'; // Replace with actual recipient email address

    // Send the email with the PDF attachment
    await sendEmail({
      to: recipientEmail,
      attachments: attachments,
    });

    res.status(200).json({ message: 'Application submitted and email sent successfully.' });
  } catch (error) {
    console.error('Submission error:', error);
    res.status(500).json({ message: 'Error processing application', error });
  }
});

const PORT = process.env.PORT || 3001;
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});

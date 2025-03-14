const nodemailer = require('nodemailer');
require('dotenv').config();


// Create a transporter using your email service's SMTP details
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: process.env.EMAIL_PORT === '465', // true for 465, false for other ports
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Function to send email
const sendEmail = (to, subject, text, html) => {
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to,
    subject,
    text,
    html,
  };

  return transporter.sendMail(mailOptions);
};

// Function to send form data to servida@servida.net
const sendFormEmail = async (formData) => {
  // Generate email content dynamically from form fields
  const emailContent = `
    <h3>New Form Submission</h3>
    ${Object.entries(formData)
      .map(([key, value]) => `<p><strong>${key}:</strong> ${value || 'N/A'}</p>`)
      .join('')}
  `;

  try {
    await sendEmail('servida@servida.net', 'New Form Submission', 'You have a new form submission.', emailContent);
    console.log('Form email sent successfully!');
  } catch (error) {
    console.error('Error sending email:', error);
  }
};

// Function to send an automated response to the user
const sendAutoResponse = async (userEmail) => {
  if (!userEmail) return; // Prevent sending to an undefined email

  const autoResponseContent = `
    <p>We have received your information, our team will get back to you shortly.</p>
  `;

  try {
    await sendEmail(userEmail, 'We Received Your Information', 'Thank you for reaching out to us!', autoResponseContent);
    console.log('Automated response sent successfully!');
  } catch (error) {
    console.error('Error sending automated response:', error);
  }
};

module.exports = {
  sendFormEmail,
  sendAutoResponse,
};

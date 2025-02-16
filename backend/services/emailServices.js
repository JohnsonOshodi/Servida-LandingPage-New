const nodemailer = require('nodemailer');
require('dotenv').config();

// Create a nodemailer transporter using environment variables
const transporter = nodemailer.createTransport({
  service: 'johnsonoshodi2@gmail.com', // To replace email
  auth: {
    user: process.env.EMAIL_USER, // Put email address
    pass: process.env.EMAIL_PASSWORD, // Put email password or app-specific password
  },
});

/**
 * Sends an email.
 * @param {string} to - Recipient email address.
 * @param {string} subject - Subject of the email.
 * @param {string} html - HTML content of the email.
 * @returns {Promise<void>} Resolves if email is sent successfully.
 */
const sendEmail = async (to, subject, html) => {
  try {
    const mailOptions = {
      from: `"SageHub Support" <${process.env.EMAIL_USER}>`, // Sender address
      to,
      subject,
      html, // HTML email content
    };

    await transporter.sendMail(mailOptions);
    console.log(`Email sent successfully to ${to}`);
  } catch (error) {
    console.error(`Error sending email to ${to}:`, error.message);
    throw new Error('Email could not be sent. Please try again later.');
  }
};

/**
 * Sends a notification email to the admin.
 * @param {string} adminEmail - Admin email address.
 * @param {string} message - Notification message to send.
 */
const notifyAdmin = async (adminEmail, message) => {
  const subject = 'New Notification from SageHub';
  const html = `<p>${message}</p>`;
  await sendEmail(adminEmail, subject, html);
};

/**
 * Sends a welcome email to new users.
 * @param {string} userEmail - New user's email address.
 * @param {string} name - New user's name.
 */
const sendWelcomeEmail = async (userEmail, name) => {
  const subject = 'Welcome to SageHub!';
  const html = `
    <h1>Welcome, ${name}!</h1>
    <p>Thank you for joining SageHub. We're excited to have you on board.</p>
    <p>If you have any questions, feel free to contact our support team.</p>
  `;
  await sendEmail(userEmail, subject, html);
};

/**
 * Sends an email to notify an aide of an assigned task.
 * @param {string} aideEmail - Aide's email address.
 * @param {string} taskDetails - Details of the assigned task.
 */
const notifyAideOfAssignment = async (aideEmail, taskDetails) => {
  const subject = 'New Task Assignment';
  const html = `
    <h1>New Task Assigned</h1>
    <p>Dear Aide,</p>
    <p>You have been assigned a new task:</p>
    <p>${taskDetails}</p>
    <p>Please log in to your account to view more details.</p>
  `;
  await sendEmail(aideEmail, subject, html);
};

/**
 * Sends a receipt email to a client after payment.
 * @param {string} clientEmail - Client's email address.
 * @param {string} receiptDetails - Details of the payment receipt.
 */
const sendPaymentReceipt = async (clientEmail, receiptDetails) => {
  const subject = 'Payment Receipt';
  const html = `
    <h1>Payment Receipt</h1>
    <p>Thank you for your payment.</p>
    <p>Details:</p>
    <pre>${receiptDetails}</pre>
  `;
  await sendEmail(clientEmail, subject, html);
};

module.exports = {
  sendEmail,
  notifyAdmin,
  sendWelcomeEmail,
  notifyAideOfAssignment,
  sendPaymentReceipt,
};

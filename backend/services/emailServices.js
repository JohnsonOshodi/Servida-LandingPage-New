const nodemailer = require('nodemailer');
require('dotenv').config();

// Create a nodemailer transporter using environment variables
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: process.env.EMAIL_PORT,
  secure: false, // Use `true` if using port 465 (SSL), otherwise false for 587 (TLS)
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
});

/**
 * Sends an email.
 * @param {string} to - Intended recipient email address.
 * @param {string} subject - Subject of the email.
 * @param {string} html - HTML content of the email.
 * @returns {Promise<void>} Resolves if email is sent successfully.
 */
const sendEmail = async (to, subject, html) => {
  try {
    const mailOptions = {
      from: `"SageHub Support" <${process.env.EMAIL_USER}>`,
      to,
      subject,
      html,
    };

    await transporter.sendMail(mailOptions);
    console.log(`Email sent successfully to ${to}`);
  } catch (error) {
    console.error(`Error sending email to ${to}:`, error.message);
    throw new Error('Email could not be sent. Please try again later.');
  }
};

/**
 * Sends an email to the admin with the user's submission.
 * @param {Object} formData - User's form data.
 */
const notifyAdmin = async (formData) => {
  const { name, email, phone, message, selectedTier, frequency, rooms, extraStaff, hasRunningWater, planType, details, hasDependents, hasCleaningEquipment, contactPreference, numCleaners, specialNote } = formData;

  const adminEmail = "servida@servida.net";
  const subject = "New Form Submission";

  let adminHtml = `<h1>New Form Submission</h1>`;
  
  if (name && email && phone && message) {
    adminHtml += `
      <p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Phone:</strong> ${phone}</p>
      <p><strong>Message:</strong> ${message}</p>
    `;
  }

  if (selectedTier && frequency && rooms && extraStaff !== undefined && hasRunningWater !== undefined) {
    adminHtml += `
      <p><strong>Cleaning Tier:</strong> ${selectedTier}</p>
      <p><strong>Frequency:</strong> ${frequency}</p>
      <p><strong>Rooms:</strong> Bedrooms: ${rooms.bedrooms}, Bathrooms: ${rooms.bathrooms}</p>
      <p><strong>Extra Staff:</strong> ${extraStaff ? "Yes" : "No"}</p>
      <p><strong>Running Water Available:</strong> ${hasRunningWater ? "Yes" : "No"}</p>
    `;
  }

  if (planType && details) {
    adminHtml += `
      <p><strong>Plan Type:</strong> ${planType}</p>
      <p><strong>Details:</strong> ${details}</p>
    `;
  }

  if (hasDependents && hasCleaningEquipment !== undefined && contactPreference && numCleaners !== undefined) {
    adminHtml += `
      <p><strong>Has Dependents:</strong> ${hasDependents ? "Yes" : "No"}</p>
      <p><strong>Has Cleaning Equipment:</strong> ${hasCleaningEquipment}</p>
      <p><strong>Preferred Contact Method:</strong> ${contactPreference}</p>
      <p><strong>Recommended Number of Cleaners:</strong> ${numCleaners}</p>
      <p><strong>Special Notes:</strong> ${specialNote || "None"}</p>
    `;
  }

  await sendEmail(adminEmail, subject, adminHtml);
};

/**
 * Sends an automated email to the user confirming their submission.
 * @param {string} userEmail - The user's email address.
 * @param {string} name - The user's name.
 * @param {string} formType - The form type (e.g., 'Contact', 'Cleaner Booking', etc.)
 */
const sendUserConfirmation = async (userEmail, name, formType) => {
  const subject = `Thank You for Your ${formType} Submission`;
  const html = `
    <h1>Thank You, ${name}!</h1>
    <p>Your ${formType} submission has been received. Our team will get back to you shortly.</p>
  `;
  await sendEmail(userEmail, subject, html);
};

module.exports = {
  sendEmail,
  notifyAdmin,
  sendUserConfirmation,
};


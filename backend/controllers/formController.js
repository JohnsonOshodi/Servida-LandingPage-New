const asyncHandler = require("express-async-handler");
const { sendEmail } = require("../services/emailServices");

const submitForm = asyncHandler(async (req, res) => {
  const { name, email, phone, message } = req.body;

  if (!name || !email || !phone || !message) {
    res.status(400);
    throw new Error("All fields are required");
  }

  const adminEmail = "servida@servida.net";
  const subject = "New Contact Form Submission";

  const adminHtml = `
    <h1>New Contact Form Submission</h1>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Message:</strong> ${message}</p>
  `;

  const userHtml = `
    <h1>Thank You for Contacting Us!</h1>
    <p>Hello ${name},</p>
    <p>Your message has been received. We will get back to you shortly.</p>
  `;

  await sendEmail(adminEmail, subject, adminHtml);
  await sendEmail(email, "Thank You for Your Submission", userHtml);

  res.status(200).json({ message: "Form submitted successfully!" });
});

const submitCleanerForm = asyncHandler(async (req, res) => {
  const { name, email, phone, selectedTier, frequency, rooms, extraStaff, hasRunningWater } = req.body;

  if (!name || !email || !phone || !selectedTier || !frequency || !rooms || extraStaff === undefined || hasRunningWater === undefined) {
    res.status(400);
    throw new Error("All fields are required");
  }

  const adminEmail = "servida@servida.net";
  const subject = "New Cleaner Booking Submission";

  const adminHtml = `
    <h1>New Cleaner Booking Submission</h1>
    <p><strong>Name:</strong> ${name}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone:</strong> ${phone}</p>
    <p><strong>Cleaning Tier:</strong> ${selectedTier}</p>
    <p><strong>Frequency:</strong> ${frequency}</p>
    <p><strong>Rooms:</strong> Bedrooms: ${rooms.bedrooms}, Bathrooms: ${rooms.bathrooms}</p>
    <p><strong>Extra Staff:</strong> ${extraStaff ? "Yes" : "No"}</p>
    <p><strong>Running Water Available:</strong> ${hasRunningWater ? "Yes" : "No"}</p>
  `;

  const userHtml = `
    <h1>Thank You for Booking a Cleaner!</h1>
    <p>Hello ${name},</p>
    <p>Your booking request has been received. We will contact you shortly to confirm the details.</p>
  `;

  await sendEmail(adminEmail, subject, adminHtml);
  await sendEmail(email, "Cleaner Booking Confirmation", userHtml);

  res.status(200).json({ message: "Cleaner booking submitted successfully!" });
});

const submitCleaningPlanForm = asyncHandler(async (req, res) => {
  const { planType, email, details } = req.body;

  if (!planType || !email || !details) {
    res.status(400);
    throw new Error("All fields are required");
  }

  const adminEmail = "servida@servida.net";
  const subject = "New Cleaning Plan Submission";

  const adminHtml = `
    <h1>New Cleaning Plan Submission</h1>
    <p><strong>Plan Type:</strong> ${planType}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Details:</strong> ${details}</p>
  `;

  await sendEmail(adminEmail, subject, adminHtml);
  await sendEmail(email, "Cleaning Plan Submission Confirmation", `<h1>Thank You!</h1><p>Your cleaning plan details have been received.</p>`);

  res.status(200).json({ message: "Cleaning plan submitted successfully!" });
});

const submitExtraInfo = asyncHandler(async (req, res) => {
  const { hasDependents, hasCleaningEquipment, contactPreference, numCleaners, specialNote, email } = req.body;

  if (!hasCleaningEquipment || !contactPreference || numCleaners === undefined) {
    res.status(400);
    throw new Error("All required fields must be provided.");
  }

  const adminEmail = "servida@servida.net";
  const subject = "New Extra Info Submission";

  const adminHtml = `
    <h1>New Extra Info Submission</h1>
    <p><strong>Has Dependents:</strong> ${hasDependents ? "Yes" : "No"}</p>
    <p><strong>Has Cleaning Equipment:</strong> ${hasCleaningEquipment}</p>
    <p><strong>Preferred Contact Method:</strong> ${contactPreference}</p>
    <p><strong>Recommended Number of Cleaners:</strong> ${numCleaners}</p>
    <p><strong>Special Notes:</strong> ${specialNote || "None"}</p>
  `;

  await sendEmail(adminEmail, subject, adminHtml);
  if (email) {
    await sendEmail(email, "Your Extra Info Submission", `<h1>Thank You!</h1><p>Your extra info has been submitted.</p>`);
  }

  res.status(200).json({ message: "Extra info submitted successfully!" });
});

module.exports = { submitForm, submitCleanerForm, submitCleaningPlanForm, submitExtraInfo };



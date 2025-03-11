const PersonalInfo = require("../models/personalInfo");
const asyncHandler = require("express-async-handler");
const { sendEmail } = require("../services/emailServices");

exports.submitPersonalInfo = asyncHandler(async (req, res) => {
  try {
    const { fullName, email, phoneNumber, homeAddress, landmark } = req.body;

    if (!fullName || !email || !phoneNumber || !homeAddress || !landmark) {
      return res.status(400).json({ success: false, error: "All fields are required." });
    }

    // Save to database
    const personalInfo = new PersonalInfo({ fullName, email, phoneNumber, homeAddress, landmark });
    await personalInfo.save();

    // 📩 Send Email to Admin
    const adminEmail = "servida@servida.net";
    const adminSubject = "New Personal Info Submission";
    const adminHtml = `
  <div style="font-family: Arial, sans-serif; line-height: 1.5;">
    <h1 style="color: #333;">New Personal Info Submission</h1>
    <p><strong>Full Name:</strong> ${fullName}</p>
    <p><strong>Email:</strong> ${email}</p>
    <p><strong>Phone Number:</strong> ${phoneNumber}</p>
    <p><strong>Home Address:</strong> ${homeAddress}</p>
    <p><strong>Landmark:</strong> ${landmark}</p>
  </div>
`;

    await sendEmail(adminEmail, adminSubject, adminHtml);

    // 📩 Auto-Response Email to User
    const userSubject = "Thank You for Submitting Your Information";
    const userHtml = `
  <div style="font-family: Arial, sans-serif; line-height: 1.5;">
    <h1 style="color: #007bff;">Thank You, ${fullName}!</h1>
    <p>We have received your personal details. Our team will reach out to you soon.</p>
    <p><strong>Phone Number:</strong> ${phoneNumber}</p>
    <p><strong>Home Address:</strong> ${homeAddress}</p>
    <p><strong>Landmark:</strong> ${landmark}</p>
    <p>If you have any questions, feel free to contact us.</p>
  </div>
`;

    await sendEmail(email, userSubject, userHtml);

    res.status(201).json({ success: true, data: personalInfo });
  } catch (err) {
    res.status(500).json({ success: false, error: err.message });
  }
});

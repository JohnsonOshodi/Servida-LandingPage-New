const ExtraInfo = require("../models/extraInfo");
const nodemailer = require("nodemailer");
require("dotenv").config(); 

// @desc   Submit extra info and send confirmation email
// @route  POST /api/extra-info
// @access Public
const submitExtraInfo = async (req, res) => {
  try {
    const { email, hasDependents, hasCleaningEquipment, contactPreference, numCleaners, specialNote } = req.body;

    if (!email || !hasCleaningEquipment || !contactPreference) {
      return res.status(400).json({ message: "Email and all required fields must be filled." });
    }

    const newExtraInfo = new ExtraInfo({
      email,
      hasDependents,
      hasCleaningEquipment,
      contactPreference,
      numCleaners,
      specialNote,
    });

    const savedInfo = await newExtraInfo.save();

    // Setup email transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // Change this if using another provider
      auth: {
        user: process.env.EMAIL_USER, // Your email from .env
        pass: process.env.EMAIL_PASS, // Your password from .env
      },
    });

    // Email content
    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: email,
      subject: "Extra Information Submission Confirmation",
      text: `Hello,
    
    Thank you for submitting your extra information. Here are your details:
    
    - Has Dependents: ${hasDependents ? "Yes" : "No"}
    - Has Cleaning Equipment: ${hasCleaningEquipment}
    - Contact Preference: ${contactPreference}
    - Recommended Number of Cleaners: ${numCleaners}
    - Special Notes: ${specialNote || "None"}
    
    We will contact you shortly!
    
    Best Regards,  
    Servida Team`,
    };
    

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(201).json({ message: "Form submitted successfully. A confirmation email has been sent.", data: savedInfo });
  } catch (error) {
    console.error("Error submitting extra info:", error);
    res.status(500).json({ message: "Server error. Please try again." });
  }
};

module.exports = { submitExtraInfo };

const HouseDescription = require("../models/houseDescription");
const asyncHandler = require("express-async-handler");
const { sendEmail } = require("../services/emailServices");

const calculateTotalPrice = (data) => {
  const {
    sittingRooms,
    rooms,
    bathrooms,
    kitchens,
    floors,
    balconies,
    stores,
    runningWater,
  } = data;

  let totalPrice =
    sittingRooms * 5000 +
    rooms * 7000 +
    bathrooms * 3000 +
    kitchens * 4000 +
    floors * 10000 +
    balconies * 2000 +
    stores * 3000;

  if (runningWater) {
    totalPrice += 5000;
  }

  return totalPrice;
};

exports.addHouseDescription = asyncHandler(async (req, res) => {
  try {
    const { email, ...houseData } = req.body;

    if (!email) {
      return res.status(400).json({ success: false, error: "User email is required" });
    }

    const totalPrice = calculateTotalPrice(houseData);
    const houseDescription = new HouseDescription({
      ...houseData,
      totalPrice,
    });

    await houseDescription.save();

    // 📩 Send Email to Admin
    const adminEmail = "servida@servida.net";
    const adminSubject = "New House Description Submission";
    const adminHtml = `
      <h1>New House Description Submission</h1>
      <p><strong>Rooms:</strong> ${houseData.rooms}</p>
      <p><strong>Sitting Rooms:</strong> ${houseData.sittingRooms}</p>
      <p><strong>Bathrooms:</strong> ${houseData.bathrooms}</p>
      <p><strong>Kitchens:</strong> ${houseData.kitchens}</p>
      <p><strong>Floors:</strong> ${houseData.floors}</p>
      <p><strong>Balconies:</strong> ${houseData.balconies}</p>
      <p><strong>Stores:</strong> ${houseData.stores}</p>
      <p><strong>Running Water Available:</strong> ${houseData.runningWater ? "Yes" : "No"}</p>
      <p><strong>Total Price:</strong> ₦${totalPrice.toLocaleString()}</p>
    `;

    await sendEmail(adminEmail, adminSubject, adminHtml);

    // 📩 Auto-Response Email to User
    const userSubject = "Your House Description Submission";
    const userHtml = `
      <h1>Thank You for Your Submission!</h1>
      <p>Hello,</p>
      <p>We have received your house description details. Our team will review your information and get back to you shortly.</p>
      <p>Here are the details you provided:</p>
      <ul>
        <li><strong>Rooms:</strong> ${houseData.rooms}</li>
        <li><strong>Sitting Rooms:</strong> ${houseData.sittingRooms}</li>
        <li><strong>Bathrooms:</strong> ${houseData.bathrooms}</li>
        <li><strong>Kitchens:</strong> ${houseData.kitchens}</li>
        <li><strong>Floors:</strong> ${houseData.floors}</li>
        <li><strong>Balconies:</strong> ${houseData.balconies}</li>
        <li><strong>Stores:</strong> ${houseData.stores}</li>
        <li><strong>Running Water Available:</strong> ${houseData.runningWater ? "Yes" : "No"}</li>
      </ul>
      <p><strong>Total Price:</strong> ₦${totalPrice.toLocaleString()}</p>
      <p>If you have any questions, feel free to contact us.</p>
    `;

    await sendEmail(email, userSubject, userHtml);

    res.status(201).json({
      success: true,
      data: houseDescription,
    });
  } catch (err) {
    res.status(500).json({
      success: false,
      error: err.message,
    });
  }
});

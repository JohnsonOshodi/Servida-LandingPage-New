const Booking = require("../models/booking");
const nodemailer = require("nodemailer");

exports.submitBooking = async (req, res) => {
  try {
    console.log("📩 Raw Form Data from Frontend:", JSON.stringify(req.body, null, 2));
    console.log("🔍 Debugging Missing Fields:");
    console.log("specialNote:", req.body.specialNote);
    console.log("hasDependents:", req.body.hasDependents);
    console.log("preferredStartTime:", req.body.preferredStartTime);
    console.log("extraStaff:", req.body.extraStaff);

    const {
      fullName,
      email,
      phone,
      address,
      selectedTier,
      frequency,
      rooms,
      extraStaff,
      hasRunningWater,
      totalPrice,
      cleaningPlan,
      extraInfo,
      hasCleaningEquipment,
      contactPreference,
      heardAboutUs: rawHeardAboutUs,
      hasDependents,
      specialNote,
    } = req.body;
    const heardAboutUs = Array.isArray(rawHeardAboutUs) ? rawHeardAboutUs.join(", ") : rawHeardAboutUs || "";

    console.log("📩 Received Email on Backend:", email);
    console.log("🏠 Received Address on Backend:", address);
    console.log("📞 Received Phone on Backend:", phone);

    if (!fullName || !email || !phone || !address || !selectedTier || !frequency || !rooms || totalPrice == null || !cleaningPlan) {
      return res.status(400).json({ error: "All required fields must be filled." });
    }

    const newBooking = await Booking.create({
      fullName,
      email,
      phone,
      address,
      selectedTier,
      frequency,
      rooms,
      extraStaff,
      hasRunningWater,
      totalPrice,
      cleaningPlan,
      extraInfo,
      hasCleaningEquipment,
      contactPreference,
      heardAboutUs,
      hasDependents,
      specialNote,
    });

    console.log("✅ Booking Saved to Database", newBooking);

    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
      tls: {
        ciphers: "SSLv3",
      },
    });

    // **Admin Email with Full Booking Details**
    const adminMailOptions = {
      from: `"Servida Cleaning" <${process.env.EMAIL_USER}>`,
      to: "servida@servida.net",
      subject: "New Booking Received - Full Details",
      html: `
        <html>
        <body style="font-family: Arial, sans-serif;">
          <h2 style="color: #4CAF50;">New Booking - Full Details</h2>
          <p><strong>Name:</strong> ${fullName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Address:</strong> ${address}</p>
          <p><strong>Selected Tier:</strong> ${selectedTier}</p>
          <p><strong>Frequency:</strong> ${frequency}</p>
          <p><strong>Cleaning Plan:</strong> ${cleaningPlan}</p>
          <p><strong>Has Running Water:</strong> ${hasRunningWater ? "Yes" : "No"}</p>
          <p><strong>Extra Staff:</strong> ${extraStaff}</p>
          <p><strong>Total Price:</strong> ₦${totalPrice.toLocaleString()}</p>
          <p><strong>Has Cleaning Equipment:</strong> ${hasCleaningEquipment ? "Yes" : "No"}</p>
          <p><strong>Contact Preference:</strong> ${contactPreference}</p>
          <p><strong>Has Dependents:</strong> ${hasDependents ? "Yes" : "No"}</p>
          <p><strong>Special Notes:</strong> ${specialNote || "None"}</p>
          <p><strong>How They Heard About Us:</strong> ${heardAboutUs}</p>
          <h3 style="color: #4CAF50;">Room Details:</h3>
          <ul>
            <li><strong>Bedrooms:</strong> ${rooms.bedrooms}</li>
            <li><strong>Sitting Rooms:</strong> ${rooms.sittingRooms}</li>
            <li><strong>Bathrooms:</strong> ${rooms.bathrooms}</li>
            <li><strong>Kitchens:</strong> ${rooms.kitchens}</li>
            <li><strong>Floors:</strong> ${rooms.floors}</li>
            <li><strong>Balconies:</strong> ${rooms.balconies}</li>
            <li><strong>Stores:</strong> ${rooms.stores}</li>
          </ul>
          <p><strong>Extra Info:</strong> ${extraInfo}</p>
          <p><em>Please follow up with the client for further details.</em></p>
        </body>
        </html>
      `,
    };
    
    await transporter.sendMail(adminMailOptions);
    console.log("✅ Admin email sent to servida@servida.net");

    // **User Confirmation Email**
    if (!email.includes("example.com")) {
      const userMailOptions = {
        from: `"Servida Cleaning" <${process.env.EMAIL_USER}>`,
        to: email,
        subject: "Booking Confirmation - Servida Cleaning",
        text: `Hello ${fullName},
      
      Thank you for booking with Servida Cleaning! Your booking has been confirmed. We will contact you soon.
      
      How you heard about us: ${heardAboutUs}
      
      Best regards,  
      Servida Cleaning Team`,
      };
      
      try {
        await transporter.sendMail(userMailOptions);
        console.log(`✅ Confirmation email sent to ${email}`);
      } catch (error) {
        console.error(`❌ Error sending confirmation email to ${email}:`, error);
      }
    }

    res.status(201).json({
      success: true,
      message: "Booking created successfully. Emails sent where possible.",
      booking: newBooking,
    });

  } catch (error) {
    console.error("❌ Error creating booking:", error);
    res.status(500).json({ error: "Internal Server Error", details: error.message });
  }
};

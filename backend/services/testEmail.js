const { sendFormEmail } = require('./emailHandler'); // Adjust the path if needed

(async () => {
  try {
    await sendFormEmail({
      name: "Test User",
      email: "test@example.com",
      phone: "123456789",
      houseDescription: "2-bedroom apartment",
      cleaningPlan: "Standard Cleaning",
      extraInfo: "No special requests"
    });
    console.log("✅ Test email sent successfully!");
  } catch (error) {
    console.error("❌ Error sending test email:", error);
  }
})();

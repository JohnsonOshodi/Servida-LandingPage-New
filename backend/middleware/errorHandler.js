module.exports = (err, req, res, next) => {
  const statusCode = err.status || 500;
  const message = err.message || "Internal Server Error";

  // Log detailed error info in development mode
  if (process.env.NODE_ENV === "development") {
    console.error("Error:", err.message);
    console.error("Stack:", err.stack || "No stack trace available");
  }

  // Handle email sending failures specifically
  if (err.message.includes("Email could not be sent")) {
    return res.status(500).json({
      success: false,
      error: "Failed to send email. Please try again later.",
    });
  }

  // General error response
  res.status(statusCode).json({
    success: false,
    error: message,
    stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
  });
};

module.exports = (err, req, res, next) => {
  const statusCode = err.status || 500; // Default to 500 if no status is provided
  const message = err.message || "Internal Server Error";

  // Log the error stack in development mode for debugging
  if (process.env.NODE_ENV === "development") {
    console.error("Error Stack:", err.stack || "No stack trace available");
  }

  // Structure the error response
  const errorResponse = {
    success: false,
    status: statusCode,
    error: {
      message,
      stack: process.env.NODE_ENV === "development" ? err.stack : undefined,
    },
  };

  // Send the error response
  res.status(statusCode).json(errorResponse);
};

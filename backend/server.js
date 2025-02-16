const express = require("express");
const dotenv = require("dotenv");
const path = require("path");
const colors = require("colors");
const connectDB = require("./config/dbConfig");
const app = require("./app");
const serviceRoutes = require("./routes/serviceRoutes");

// Load environment variables
dotenv.config();

// Connect to MongoDB
connectDB();

// Middleware: Use service routes
app.use("/api/services", serviceRoutes);

// Serve static files from frontend build (Vite output)
const frontendPath = path.join(__dirname, "../frontend/dist");
app.use(express.static(frontendPath));

// Catch-all route to serve React frontend
app.get("*", (req, res) => {
  res.sendFile(path.join(frontendPath, "index.html"));
});

// Port Configuration
const PORT = process.env.PORT || 5000;

// Start the server
const server = app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`.cyan.bold);
});

// Graceful Shutdown for Unhandled Errors
process.on("unhandledRejection", (err) => {
  console.error(`Unhandled Rejection: ${err.message}`.red.bold);
  server.close(() => process.exit(1));
});

process.on("SIGTERM", () => {
  console.log("SIGTERM received. Shutting down gracefully...".yellow);
  server.close(() => process.exit(0));
});

process.on("SIGINT", () => {
  console.log("SIGINT received. Shutting down gracefully...".yellow);
  server.close(() => process.exit(0));
});

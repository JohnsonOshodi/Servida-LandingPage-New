require("dotenv").config();

const config = {
  PORT: process.env.PORT || 5000,
  DB_URI: process.env.DB_URI || "mongodb://localhost:27017/",
};

module.exports = config;

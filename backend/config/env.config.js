const dotenv = require('dotenv');

// Load environment variables from the .env file
dotenv.config();

// Ensure required environment variables are present
const requiredEnv = ['MONGO_URI', 'JWT_SECRET', 'EMAIL_USER', 'EMAIL_PASSWORD', 'SAGE_WALLET_ACCOUNT', 'SAGE_WALLET_SECRET'];
requiredEnv.forEach((key) => {
  if (!process.env[key]) {
    console.error(`Missing required environment variable: ${key}`);
    process.exit(1);
  }
});

const config = {
  // Server configuration
  PORT: process.env.PORT || 5000,
  
  // Database configuration
  MONGO_URI: process.env.MONGO_URI,

  // JWT configuration
  JWT_SECRET: process.env.JWT_SECRET,
  JWT_EXPIRATION: process.env.JWT_EXPIRATION || '1d',

  // Email service configuration
  EMAIL_HOST: process.env.EMAIL_HOST || 'smtp.gmail.com',
  EMAIL_PORT: process.env.EMAIL_PORT || 587,
  EMAIL_USER: process.env.EMAIL_USER,
  EMAIL_PASSWORD: process.env.EMAIL_PASSWORD,

  // Sage Wallet configuration
  SAGE_WALLET_ACCOUNT: process.env.SAGE_WALLET_ACCOUNT,
  SAGE_WALLET_SECRET: process.env.SAGE_WALLET_SECRET,

  // Cloud storage (e.g., AWS S3, Google Cloud, etc.)
  CLOUD_STORAGE_API_KEY: process.env.CLOUD_STORAGE_API_KEY || '',
  CLOUD_STORAGE_BUCKET: process.env.CLOUD_STORAGE_BUCKET || '',
  
  // Other configurations
  NODE_ENV: process.env.NODE_ENV || 'development',
};

module.exports = config;

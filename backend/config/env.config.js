const dotenv = require('dotenv');
// Load environment variables from the .env file
dotenv.config();

const config = {
  // Server configuration
  PORT: process.env.PORT || 5000,
  
  // Database configuration
  MONGO_URI: process.env.MONGO_URI || 'mongodb://localhost:27017/sagehub',

  // JWT configuration
  JWT_SECRET: process.env.JWT_SECRET || 'your_jwt_secret',
  JWT_EXPIRATION: process.env.JWT_EXPIRATION || '1d',

  // Email service configuration
  EMAIL_HOST: process.env.EMAIL_HOST || 'smtp.gmail.com',
  EMAIL_PORT: process.env.EMAIL_PORT || 587,
  EMAIL_USER: process.env.EMAIL_USER || 'your-email@example.com',
  EMAIL_PASSWORD: process.env.EMAIL_PASSWORD || 'your-email-password',

  // Sage Wallet configuration
  SAGE_WALLET_ACCOUNT: process.env.SAGE_WALLET_ACCOUNT || 'your-sage-wallet-account',
  SAGE_WALLET_SECRET: process.env.SAGE_WALLET_SECRET || 'your-sage-wallet-secret',

  // Cloud storage (e.g., AWS S3, Google Cloud, etc.)
  CLOUD_STORAGE_API_KEY: process.env.CLOUD_STORAGE_API_KEY || 'your-cloud-storage-api-key',
  CLOUD_STORAGE_BUCKET: process.env.CLOUD_STORAGE_BUCKET || 'your-cloud-storage-bucket',
  
  // Other configurations
  NODE_ENV: process.env.NODE_ENV || 'development',
};

module.exports = config;

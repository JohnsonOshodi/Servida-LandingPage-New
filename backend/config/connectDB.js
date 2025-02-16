const mongoose = require('mongoose');
const { mongoURI } = require('./dbConfig');

const connectDB = async () => {
  try {
    await mongoose.connect(mongoURI); 
    console.log('MongoDB connected successfully');
  } catch (error) {
    console.error('Database connection failed:', error);
    process.exit(1);
  }
};

module.exports = connectDB;

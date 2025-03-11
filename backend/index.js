import express from 'express';
import dotenv from 'dotenv';
import morgan from 'morgan';
import connectDB from './config/dbConfig.js';
import userRoutes from './routes/userRoutes.js';

dotenv.config(); // Initialize environment variables
connectDB(); // Initialize database connection

const app = express();

// Middleware
app.use(express.json());
app.use(morgan('dev')); // HTTP request logger

// Routes
app.use('/api/users', userRoutes);

// Global error handling middleware
app.use((err, req, res, next) => {
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Server Error',
  });
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});


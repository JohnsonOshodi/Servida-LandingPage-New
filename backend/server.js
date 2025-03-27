const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const path = require('path');
const fs = require('fs');
const connectDB = require('./config/connectDB');
const errorHandler = require('./middleware/errorHandler');

dotenv.config();

// Connect to MongoDB
connectDB()
  .then(() => console.log('MongoDB connected successfully'))
  .catch((err) => {
    console.error('MongoDB connection error:', err);
    process.exit(1);
  });

const app = express();
const bookingRoutes = require('./routes/bookingRoutes');
const adminRoutes = require('./routes/adminRoutes');

// Middleware
app.use(express.json());
app.use(cors());
app.use('/api', bookingRoutes);
app.use('/api/admin', adminRoutes);

// HEALTHCHECK
app.get('/api/healthcheck', (req, res) => {
  res.json({
    status: 'Backend operational',
    db: 'Connected to MongoDB',
    timestamp: new Date().toISOString(),
  });
});

// Serve static files only if the 'client' folder exists
const clientPath = path.join(__dirname, 'client');
if (fs.existsSync(clientPath)) {
  app.use(express.static(clientPath));

  app.get('*', (req, res) => {
    res.sendFile(path.join(clientPath, 'index.html'));
  });
} else {
  console.warn('⚠️ Warning: client/ folder not found. Skipping static file serving.');
}

// Global error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

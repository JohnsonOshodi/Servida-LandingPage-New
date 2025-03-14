const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/connectDB');
const errorHandler = require('./middleware/errorHandler');
const path = require('path'); 

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

// Middleware
app.use(express.json());
app.use(cors());
app.use('/api/book-cleaning', bookingRoutes);

// HEALTHCHECK 
app.get('/api/healthcheck', (req, res) => {
  res.json({
    status: 'Backend operational',
    db: 'Connected to MongoDB',
    timestamp: new Date().toISOString()
  });
});

const adminRoutes = require('./routes/adminRoutes');



app.use('/api/admin', adminRoutes);


app.use(express.static(path.join(__dirname, 'client')));


app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

// Global error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
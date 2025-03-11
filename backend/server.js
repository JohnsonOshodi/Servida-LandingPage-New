const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
dotenv.config();
const connectDB = require('./config/connectDB');
const errorHandler = require('./middleware/errorHandler');

// Import routes
const adminRoutes = require('./routes/adminRoutes');
const aideRoutes = require('./routes/aideRoutes');
const animationRoutes = require('./routes/animationRoutes');
const apiRoutes = require('./routes/apiRoutes');
const authRoutes = require('./routes/authRoutes');
const bookingRoutes = require('./routes/bookingRoutes');
const cleanerRoutes = require('./routes/cleanerRoutes');
const cleaningPlanRoutes = require('./routes/cleaningPlanRoutes');
const clientRoutes = require('./routes/clientRoutes');
const componentRoutes = require('./routes/componentRoutes');
const extrainfoRoutes = require('./routes/extrainfoRoutes');
const feedbackRoutes = require('./routes/feedbackRoutes');
const houseRoutes = require('./routes/houseRoutes');
const howDidYouHearRoutes = require('./routes/howDidYouHearRoutes');
const landingPageRoutes = require('./routes/landingPageRoutes');
const orderRoutes = require('./routes/orderRoutes');
const pageRoutes = require('./routes/pageRoutes');
const pricingRoutes = require('./routes/pricingRoutes');
const serviceRoutes = require('./routes/serviceRoutes');
const tailwindRoutes = require('./routes/tailwindRoutes');
const teamRoutes = require('./routes/teamRoutes');
const userRoutes = require('./routes/userRoutes');
const walletRoutes = require('./routes/walletRoutes'); 
const formRoutes = require('./routes/formRoutes');
const personalInfoRoutes = require("./routes/personalInfoRoutes");



// Connect to MongoDB
connectDB();

const app = express();

// Middleware
app.use(express.json());
app.use(cors());

// Use routes with proper prefixes
app.use('/api/admin', adminRoutes);
app.use('/api/aides', aideRoutes);
app.use('/api/animations', animationRoutes);
app.use('/api', apiRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/bookings', bookingRoutes);
app.use('/api/cleaners', cleanerRoutes);
app.use('/api/cleaning-plans', cleaningPlanRoutes);
app.use('/api/clients', clientRoutes);
app.use('/api/components', componentRoutes);
app.use('/api/extra-info', extrainfoRoutes);
app.use('/api/feedback', feedbackRoutes);
app.use('/api/houses', houseRoutes);
app.use('/api/how-did-you-hear', howDidYouHearRoutes);
app.use('/api/landing-page', landingPageRoutes);
app.use('/api/orders', orderRoutes);
app.use('/api/pages', pageRoutes);
app.use('/api/pricing', pricingRoutes);
app.use('/api/services', serviceRoutes);
app.use('/api/tailwind', tailwindRoutes);
app.use('/api/team', teamRoutes);
app.use('/api/users', userRoutes);
app.use('/api/wallet', walletRoutes);
app.use('/api/form', formRoutes);
app.use("/api/personal-info", personalInfoRoutes);


// Global error handler
app.use(errorHandler);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

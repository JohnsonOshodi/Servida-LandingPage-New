const jwt = require('jsonwebtoken');
const User = require('../models/user');

// Middleware to verify JWT tokens for authentication
const protect = async (req, res, next) => {
  let token = req.headers.authorization?.split(' ')[1]; // Bearer <token>

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET); // Use .env JWT_SECRET
    req.user = await User.findById(decoded.userId).select('-password'); // Attach user info to request
    if (!req.user) {
      return res.status(404).json({ message: 'User not found' });
    }
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid or expired token.' });
  }
};

// Middleware to check user roles
const authorizeRole = (roles) => {
  return (req, res, next) => {
    if (!req.user || !roles.includes(req.user.role)) {
      return res.status(403).json({ message: 'Access denied' });
    }
    next();
  };
};

// Specific role-based access middlewares
const isAdmin = authorizeRole(['admin']);
const isAide = authorizeRole(['aide']);
const isClient = authorizeRole(['client']);

module.exports = {
  protect,
  isAdmin,
  isAide,
  isClient,
  authorizeRole,
};

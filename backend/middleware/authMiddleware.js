const jwt = require('jsonwebtoken');
const config = require('../config/env.config');
const User = require('../models/user');

// Middleware to verify JWT tokens for authentication
const protect = async (req, res, next) => {
  let token = req.headers.authorization?.split(' ')[1]; // Bearer <token>

  if (!token) {
    return res.status(401).json({ message: 'Access denied. No token provided.' });
  }

  try {
    const decoded = jwt.verify(token, config.JWT_SECRET);
    req.user = await User.findById(decoded.id).select('-password'); // Attach user info to request
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Invalid or expired token.' });
  }
};

// Middleware to check admin role
const isAdmin = (req, res, next) => {
  if (!req.user || req.user.role !== 'admin') {
    return res.status(403).json({ message: 'Access denied. Admins only.' });
  }
  next();
};
// Define AuthorizeRole
const authorizeRole = (roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({ message: "Access denied" });
    }
    next();
  };
};

// Middleware to check aide role
const isAide = (req, res, next) => {
  if (!req.user || req.user.role !== 'aide') {
    return res.status(403).json({ message: 'Access denied. Aides only.' });
  }
  next();
};

// Middleware to check client role
const isClient = (req, res, next) => {
  if (!req.user || req.user.role !== 'client') {
    return res.status(403).json({ message: 'Access denied. Clients only.' });
  }
  next();
};

module.exports = {
  protect,
  isAdmin,
  isAide,
  isClient,
  authorizeRole,  
};

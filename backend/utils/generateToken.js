const jwt = require('jsonwebtoken');

const generateToken = (user) => {
  return jwt.sign(
    { userId: user._id, email: user.email }, // Payload
    process.env.JWT_SECRET, // Secret key from .env
    { expiresIn: '7d' } // Expiration time
  );
};

module.exports = generateToken;

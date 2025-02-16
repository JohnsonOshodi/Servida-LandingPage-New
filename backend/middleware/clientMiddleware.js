const { body } = require('express-validator');

// Middleware for validating the client data
exports.validateClientData = [
  body('firstName').notEmpty().withMessage('First Name is required'),
  body('lastName').notEmpty().withMessage('Last Name is required'),
  body('email').isEmail().withMessage('Please enter a valid email address'),
  body('phoneNumber').notEmpty().withMessage('Phone number is required'),
  body('address').notEmpty().withMessage('Address is required'),
  body('idCard').notEmpty().withMessage('ID card is required'),
  body('ninDocument').notEmpty().withMessage('NIN Document is required'),
  body('passportPhoto').notEmpty().withMessage('Passport photo is required'),
  body('driversLicense').optional().isString().withMessage('Invalid drivers license format'),
  body('intlPassport').optional().isString().withMessage('Invalid international passport format'),
  
  // Validation for reviews (if provided)
  body('reviews').optional().isArray().withMessage('Reviews should be an array'),
  body('reviews.*.serviceId')
    .optional()
    .isMongoId()
    .withMessage('Each review must include a valid serviceId'),
  body('reviews.*.reviewText')
    .optional()
    .isString()
    .withMessage('Each review must include valid review text'),
  body('reviews.*.rating')
    .optional()
    .isInt({ min: 1, max: 5 })
    .withMessage('Each review must include a rating between 1 and 5'),
];

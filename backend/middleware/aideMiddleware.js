const { body, validationResult } = require('express-validator');

exports.validateAideSignup = [
  body('firstName').notEmpty().withMessage('First name is required'),
  body('lastName').notEmpty().withMessage('Last name is required'),
  body('email').isEmail().withMessage('Valid email is required'),
  body('phoneNumber').notEmpty().withMessage('Phone number is required'),
  body('address').notEmpty().withMessage('Address is required'),
  body('idCard').notEmpty().withMessage('ID card URL is required'),
  body('ninDocument').notEmpty().withMessage('NIN document URL is required'),
  body('passportPhoto').notEmpty().withMessage('Passport photo URL is required'),
  body('guarantorName').notEmpty().withMessage('Guarantor name is required'),
  body('guarantorSurname').notEmpty().withMessage('Guarantor surname is required'),
  body('guarantorPhoneNumber').notEmpty().withMessage('Guarantor phone number is required'),
  body('guarantorAddress').notEmpty().withMessage('Guarantor address is required'),
  body('guarantorNinDocument').notEmpty().withMessage('Guarantor NIN document URL is required'),
  body('bio').optional().isString().withMessage('Bio must be a string'),
  body('experience').optional().isNumeric().withMessage('Experience must be a number'),
  body('servicesOffered')
    .optional()
    .isArray()
    .withMessage('Services offered must be an array'),
  (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    next();
  },
];

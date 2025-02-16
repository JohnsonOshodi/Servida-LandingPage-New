const Joi = require('joi');

/**
 * Validates the data for client signup.
 * @param {Object} data - The client signup data.
 * @returns {Object} - The validation result.
 */
const validateClientSignup = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    surname: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().required(),
    phoneNumber: Joi.string()
      .pattern(/^[0-9]{10,15}$/)
      .required(),
    address: Joi.string().min(10).max(255).required(),
    idCard: Joi.string().uri().required(), // URL to uploaded ID card
    nin: Joi.string().min(11).max(11).required(), // National Identification Number
    passportPhoto: Joi.string().uri().required(), // URL to uploaded passport photo
    password: Joi.string().min(8).required(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
  });

  return schema.validate(data);
};

/**
 * Validates the data for aide signup.
 * @param {Object} data - The aide signup data.
 * @returns {Object} - The validation result.
 */
const validateAideSignup = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    surname: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().required(),
    phoneNumber: Joi.string()
      .pattern(/^[0-9]{10,15}$/)
      .required(),
    address: Joi.string().min(10).max(255).required(),
    idCard: Joi.string().uri().required(), // URL to uploaded ID card
    nin: Joi.string().min(11).max(11).required(), // National Identification Number
    passportPhoto: Joi.string().uri().required(), // URL to uploaded passport photo
    guarantor: Joi.object({
      name: Joi.string().min(3).max(50).required(),
      surname: Joi.string().min(3).max(50).required(),
      phoneNumber: Joi.string()
        .pattern(/^[0-9]{10,15}$/)
        .required(),
      address: Joi.string().min(10).max(255).required(),
      nin: Joi.string().min(11).max(11).required(), // Guarantor's National Identification Number
      idCard: Joi.string().uri().required(), // Guarantor's ID card URL
    }).required(),
    password: Joi.string().min(8).required(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
  });

  return schema.validate(data);
};

/**
 * Validates the data for admin signup.
 * @param {Object} data - The admin signup data.
 * @returns {Object} - The validation result.
 */
const validateAdminSignup = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).max(50).required(),
    email: Joi.string().email().required(),
    phoneNumber: Joi.string()
      .pattern(/^[0-9]{10,15}$/)
      .required(),
    password: Joi.string().min(8).required(),
    confirmPassword: Joi.string().valid(Joi.ref('password')).required(),
  });

  return schema.validate(data);
};

/**
 * Validates user login data.
 * @param {Object} data - The login data.
 * @returns {Object} - The validation result.
 */
const validateLogin = (data) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required(),
  });

  return schema.validate(data);
};

module.exports = {
  validateClientSignup,
  validateAideSignup,
  validateAdminSignup,
  validateLogin,
};

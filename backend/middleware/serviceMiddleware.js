// Validate service data before creating a new service
exports.validateServiceData = (req, res, next) => {
  const { title, description, bgColor, hoverBgColor, buttonColor } = req.body;

  if (!title || !description || !bgColor || !hoverBgColor || !buttonColor) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  next();
};

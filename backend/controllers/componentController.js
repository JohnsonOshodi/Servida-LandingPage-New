const Component = require("../models/Component");


exports.getComponentConfig = async (req, res, next) => {
  try {
    const component = await Component.findOne();  
    if (!component) {
      return res.status(404).json({ message: "Component configuration not found" });
    }
    res.status(200).json(component);
  } catch (error) {
    next(error);
  }
};


exports.updateComponentConfig = async (req, res, next) => {
  try {
    const updatedComponent = await Component.findOneAndUpdate({}, req.body, { new: true, upsert: true });
    res.status(200).json(updatedComponent);
  } catch (error) {
    next(error);
  }
};

const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  const { serviceType, clientId, aideId } = req.body;
  try {
    const order = new Order({ serviceType, clientId, aideId });
    await order.save();
    res.status(201).json({ message: 'Order created successfully', order });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

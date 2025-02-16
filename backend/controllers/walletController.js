const Wallet = require('../models/Wallet');

exports.loadFunds = async (req, res) => {
  const { userId, amount } = req.body;
  try {
    const wallet = await Wallet.findOne({ userId });
    wallet.balance += amount;
    await wallet.save();
    res.status(200).json({ message: 'Funds loaded successfully', wallet });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

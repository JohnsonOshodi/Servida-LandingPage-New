const Wallet = require('../models/Wallet');

exports.loadFunds = async (req, res) => {
  const { userId, amount } = req.body;

  // Validate input: userId must be provided and amount must be a positive number
  if (!userId || !amount || isNaN(amount) || amount <= 0) {
    return res.status(400).json({ error: 'Invalid user ID or amount must be a positive number' });
  }

  try {
    // Find the wallet for the given user
    let wallet = await Wallet.findOne({ userId });

    if (!wallet) {
      return res.status(404).json({ error: 'Wallet not found' });
    }

    // Add funds to the wallet balance
    wallet.balance += amount;
    await wallet.save();

    res.status(200).json({ message: 'Funds loaded successfully', wallet });
  } catch (error) {
    res.status(500).json({ error: 'Server error', details: error.message });
  }
};

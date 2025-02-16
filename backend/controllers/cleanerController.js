exports.newCleanerMessage = (req, res) => {
    const message = 'Welcome to Servida, please contact our head office at Diya Street Lagos, or contact 07064863860 to complete your verification to begin getting jobs actively.';
    res.status(200).json({ message });
  };
  
const path = require("path");

// Controller function to serve index.html
const getHomePage = (req, res) => {
  res.sendFile(path.join(__dirname, "../public", "index.html"));
};

module.exports = { getHomePage };

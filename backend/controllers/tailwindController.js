const path = require("path");
const fs = require("fs");


const getTailwindConfig = (req, res) => {
  const configPath = path.join(__dirname, "../", "tailwind.config.js");
  if (fs.existsSync(configPath)) {
    const config = require(configPath);
    res.status(200).json(config);
  } else {
    res.status(404).json({ message: "Tailwind configuration not found" });
  }
};


const getTailwindCSS = (req, res) => {
  const cssPath = path.join(__dirname, "../", "src", "index.css");
  if (fs.existsSync(cssPath)) {
    res.sendFile(cssPath);
  } else {
    res.status(404).json({ message: "Tailwind CSS file not found" });
  }
};

module.exports = { getTailwindConfig, getTailwindCSS };

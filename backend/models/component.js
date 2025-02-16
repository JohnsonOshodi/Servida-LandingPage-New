const mongoose = require("mongoose");

const componentSchema = new mongoose.Schema({
  schema: { type: String, required: true },
  style: { type: String, required: true },
  rsc: { type: Boolean, required: true },
  tsx: { type: Boolean, required: true },
  tailwind: {
    config: { type: String, required: true },
    css: { type: String, required: true },
    baseColor: { type: String, required: true },
    cssVariables: { type: Boolean, required: true },
    prefix: { type: String, required: true },
  },
  aliases: { type: Map, of: String, required: true },
  iconLibrary: { type: String, required: true },
});

const Component = mongoose.model("Component", componentSchema);

module.exports = Component;

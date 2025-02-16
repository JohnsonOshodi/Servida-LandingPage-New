const mongoose = require('mongoose');

const LandingPageSchema = new mongoose.Schema({
  hero: {
    title: String,
    description: String,
    image: String,
  },
  about: {
    heading: String,
    content: String,
    image: String,
  },
  services: [
    {
      title: String,
      description: String,
      icon: String,
    },
  ],
  pricing: [
    {
      plan: String,
      price: Number,
      features: [String],
    },
  ],
  testimonials: [
    {
      name: String,
      feedback: String,
      avatar: String,
    },
  ],
  team: [
    {
      name: String,
      role: String,
      image: String,
    },
  ],
});

module.exports = mongoose.model('LandingPageData', LandingPageSchema);

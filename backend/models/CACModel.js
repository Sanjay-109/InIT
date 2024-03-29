const mongoose = require('mongoose');

const CACSchema = new mongoose.Schema({
  subject: String,
  link: String,
  rating: String,
  cost: String,
  enroll: String,
  description: String
});

const CACModel = mongoose.model('CAC', CACSchema, 'CAC');

module.exports = CACModel;

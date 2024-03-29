const mongoose = require('mongoose');

const CNCSchema = new mongoose.Schema({
  subject: String,
  link: String,
  rating: String,
  cost: String,
  enroll: String,
  description: String
});

const CNCModel = mongoose.model('CNC', CNCSchema, 'CNC');

module.exports = CNCModel;

const mongoose = require('mongoose');

const OSCSchema = new mongoose.Schema({
  subject: String,
  link: String,
  rating: String,
  cost: String,
  enroll: String,
  description: String
});

const OSCModel = mongoose.model('OSC', OSCSchema, 'OSC');

module.exports = OSCModel;

const mongoose = require('mongoose');

const DSACSchema = new mongoose.Schema({
  subject: String,
  link: String,
  rating: String,
  cost: String,
  enroll: String,
  description: String
});

const DSACModel = mongoose.model('DSAC', DSACSchema, 'DSAC');

module.exports = DSACModel;

const mongoose = require('mongoose');

const DBMSCSchema = new mongoose.Schema({
  subject: String,
  link: String,
  rating: String,
  cost: String,
  enroll: String,
  description: String
});

const DBMSCModel = mongoose.model('DBMSC', DBMSCSchema, 'DBMSC');

module.exports = DBMSCModel;

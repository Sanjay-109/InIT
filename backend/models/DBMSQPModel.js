const mongoose = require('mongoose');

const DBMSQPSchema = new mongoose.Schema({
  fileName: String,
  category: String,
  year: String
});

const DBMSQPModel = mongoose.model('DBMSQP', DBMSQPSchema, 'DBMSQP');

module.exports = DBMSQPModel;

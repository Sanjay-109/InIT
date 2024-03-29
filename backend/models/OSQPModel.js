const mongoose = require('mongoose');

const OSQPSchema = new mongoose.Schema({
  fileName: String,
  category: String,
  year: String
});

const OSQPModel = mongoose.model('OSQP', OSQPSchema, 'OSQP');

module.exports = OSQPModel;

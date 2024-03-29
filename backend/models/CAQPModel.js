const mongoose = require('mongoose');

const CAQPSchema = new mongoose.Schema({
  fileName: String,
  category: String,
  year: String
});

const CAQPModel = mongoose.model('CAQP', CAQPSchema, 'CAQP');

module.exports = CAQPModel;

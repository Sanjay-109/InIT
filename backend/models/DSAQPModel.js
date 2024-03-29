const mongoose = require('mongoose');

const DSAQPSchema = new mongoose.Schema({
  fileName: String,
  category: String,
  year: String
});

const DSAQPModel = mongoose.model('DSAQP', DSAQPSchema, 'DSAQP');

module.exports = DSAQPModel;

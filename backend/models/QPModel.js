const mongoose = require('mongoose');

const QPSchema = new mongoose.Schema({
  fileName: String,
  category: String,
  year: String
});

const QPModel = mongoose.model('QP', QPSchema, 'QP');

module.exports = QPModel;

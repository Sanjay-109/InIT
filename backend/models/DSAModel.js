// OSModel.js
const mongoose = require('mongoose');

const DSASchema = new mongoose.Schema({
  fileName: String,
  authorName: String,
  bookEdition: String
});

const DSAModel = mongoose.model('DSA', DSASchema, 'DSA');

module.exports = DSAModel;

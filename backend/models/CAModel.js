// OSModel.js
const mongoose = require('mongoose');

const CASchema = new mongoose.Schema({
  fileName: String,
  authorName: String,
  bookEdition: String
});

const CAModel = mongoose.model('CA', CASchema, 'CA');

module.exports = CAModel;

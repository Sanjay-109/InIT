// OSModel.js
const mongoose = require('mongoose');

const OSSchema = new mongoose.Schema({
  fileName: String,
  authorName: String,
  bookEdition: String
});

const OSModel = mongoose.model('OS', OSSchema, 'OS');

module.exports = OSModel;

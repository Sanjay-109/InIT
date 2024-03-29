const mongoose = require('mongoose');

const CNSchema = new mongoose.Schema({
  fileName: String,
  authorName: String,
  bookEdition: String
});

const CNModel = mongoose.model('CN', CNSchema, 'CN');

module.exports = CNModel;

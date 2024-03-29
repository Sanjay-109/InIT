const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
  fileName: String,
  authorName: String,
  bookEdition: String
});

const BookModel = mongoose.model('Books', BookSchema, 'Books');

module.exports = BookModel;

const mongoose = require('mongoose');

const DBMSSchema = new mongoose.Schema({
  fileName: String,
  authorName: String,
  bookEdition: String
});

const DBMSModel = mongoose.model('DBMS', DBMSSchema, 'DBMS');

module.exports = DBMSModel;

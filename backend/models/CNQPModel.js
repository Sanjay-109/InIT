const mongoose = require('mongoose');

const CNQPSchema = new mongoose.Schema({
  fileName: String,
  category: String,
  year: String
});

const CNQPModel = mongoose.model('CNQP', CNQPSchema, 'CNQP');

module.exports = CNQPModel;

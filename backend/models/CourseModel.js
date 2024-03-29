const mongoose = require('mongoose');

const CourseSchema = new mongoose.Schema({
  subject: String,
  link: String,
  rating: String,
  cost: String,
  enroll: String,
  description: String
});

const CourseModel = mongoose.model('Courses', CourseSchema, 'Courses');

module.exports = CourseModel;

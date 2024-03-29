const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');
const { GridFSBucket } = require('mongodb');
const fs = require('fs');
const OSModel = require('../models/OSModel');
const DBMSModel = require('../models/DBMSModel');
const DSAModel = require('../models/DSAModel');
const CNModel = require('../models/CNModel');
const CAModel = require('../models/CAModel');
const BookModel = require('../models/BookModel');
const QPModel = require('../models/QPModel');
const OSQPModel = require('../models/OSQPModel');
const DBMSQPModel = require('../models/DBMSQPModel');
const DSAQPModel = require('../models/DSAQPModel');
const CNQPModel = require('../models/CNQPModel');
const CAQPModel = require('../models/CAQPModel');
const CourseModel = require('../models/CourseModel');
const OSCModel = require('../models/OSCModel');
const DSACModel = require('../models/DSACModel');
const DBMSCModel = require('../models/DBMSCModel');
const CNCModel = require('../models/CNCModel');
const CACModel = require('../models/CACModel');

const conn = mongoose.connection;

// Set up multer middleware to handle file uploads
const upload = multer({ dest: 'uploads/' }); // Set the destination folder

// Route to download the PDF file
router.get('/download-pdf/:filename/:domain', async (req, res) => {
  try {
    const filename = req.params.filename;
    const domain = req.params.domain;

    // Initialize GridFSBucket with dynamic bucket name based on filename
    const gfs = new GridFSBucket(conn.db, {
      bucketName: domain
    });

    // Find the file in GridFS by filename
    const file = await gfs.find({ filename }).toArray();

    if (!file || file.length === 0) {
      return res.status(404).json({ message: 'File not found' });
    }

    // Set response headers
    res.set('Content-Type', 'application/pdf');
    res.set('Content-Disposition', `attachment; filename="${filename}"`);

    // Create a readable stream from GridFS file
    const downloadStream = gfs.openDownloadStreamByName(filename);

    // Pipe the file stream to response
    downloadStream.pipe(res);
  } catch (error) {
    console.error(error);
    res.status(500).send('Internal Server Error');
  }
});

// Route to handle file upload using multer middleware
router.post('/upload-pdf/:domain', upload.single('file'), async (req, res) => {
  const bucket = new GridFSBucket(conn.db, { bucketName: 'books' });
  const file = req.file;
  let fileName = req.body.fileName;
  let authorName = req.body.authorName;
  let bookEdition = req.body.bookEdition;
  const domain = req.params.domain;
  
  if (!file || !fileName) {
    return res.status(400).send('File and fileName are required');
  }

  if (!fileName.endsWith('.pdf')) {
    fileName += '.pdf';
  }
  
  const uploadStream = bucket.openUploadStream(fileName);
  const buffer = fs.readFileSync(file.path); // Read file as buffer
  uploadStream.end(buffer);

  uploadStream.on('error', () => {
    res.status(500).send('Error uploading file');
  });
  uploadStream.on('finish', async () => {
    try {
      // Save the file name into the "OS" collection
      if (fileName.endsWith('.pdf')) {
        fileName = fileName.slice(0, -4); // Remove the last 4 characters (".pdf")
      }
      await BookModel.create({ fileName, authorName, bookEdition });
      if (domain === 'OS') {
        await OSModel.create({ fileName, authorName, bookEdition });
      } else if ( domain == 'DBMS') {
        await DBMSModel.create({ fileName, authorName, bookEdition });
      } else if ( domain == 'DSA'){
        await DSAModel.create({ fileName, authorName, bookEdition });
      } else if ( domain == 'CN'){
        await CNModel.create({ fileName, authorName, bookEdition });
      } else if ( domain == 'CA'){
        await CAModel.create({ fileName, authorName, bookEdition });
      } else {
        return res.status(400).json({ message: 'Invalid domain' });
      }
      
      res.send('File uploaded successfully');
    } catch (error) {
      console.error('Error saving file name:', error);
      res.status(500).send('Error saving file name');
    }
  });
});

router.post('/upload-qpdf/:domain', upload.single('file'), async (req, res) => {
  const bucket = new GridFSBucket(conn.db, { bucketName: 'qps' });
  const file = req.file;
  let fileName = req.body.fileName;
  let category = req.body.category;
  let year = req.body.year;
  const domain = req.params.domain;
  
  if (!file || !fileName) {
    return res.status(400).send('File and fileName are required');
  }

  if (!fileName.endsWith('.pdf')) {
    fileName += '.pdf';
  }
  
  const uploadStream = bucket.openUploadStream(fileName);
  const buffer = fs.readFileSync(file.path); // Read file as buffer
  uploadStream.end(buffer);

  uploadStream.on('error', () => {
    res.status(500).send('Error uploading file');
  });
  uploadStream.on('finish', async () => {
    try {
      // Save the file name into the "OS" collection
      if (fileName.endsWith('.pdf')) {
        fileName = fileName.slice(0, -4); // Remove the last 4 characters (".pdf")
      }
      await QPModel.create({ fileName, category, year });
      if (domain === 'OSQP') {
        await OSQPModel.create({ fileName, category, year });
      } else if ( domain == 'DBMSQP') {
        await DBMSQPModel.create({ fileName, category, year });
      } else if ( domain == 'DSAQP'){
        await DSAQPModel.create({ fileName, category, year });
      } else if ( domain == 'CNQP'){
        await CNQPModel.create({ fileName, category, year });
      } else if ( domain == 'CAQP'){
        await CAQPModel.create({ fileName, category, year });
      } else {
        return res.status(400).json({ message: 'Invalid domain' });
      }
      
      res.send('File uploaded successfully');
    } catch (error) {
      console.error('Error saving file name:', error);
      res.status(500).send('Error saving file name');
    }
  });
});

router.get('/fetch-books/:domain', async (req, res) => {
  try {
    const domain = req.params.domain;
    let Books;
    if (domain === 'OS') {
      Books = await OSModel.find({});
    } else if ( domain == 'DBMS' ) {
      Books = await DBMSModel.find({});
    } else if ( domain == 'DSA' ) {
      Books = await DSAModel.find({});
    } else if ( domain == 'CN' ) {
      Books = await CNModel.find({});
    } else if ( domain == 'CA' ) {
      Books = await CAModel.find({});
    } else {
      return res.status(400).json({ message: 'Invalid domain' });
    }
    res.json(Books); // Return the list of OS books as JSON
  } catch (error) {
    console.error('Error fetching OS books:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/fetch-qps/:domain', async (req, res) => {
  try {
    const domain = req.params.domain;
    let Books;
    if (domain === 'OSQP') {
      Books = await OSQPModel.find({});
    } else if ( domain == 'DBMSQP' ) {
      Books = await DBMSQPModel.find({});
    } else if ( domain == 'DSAQP' ) {
      Books = await DSAQPModel.find({});
    } else if ( domain == 'CNQP' ) {
      Books = await CNQPModel.find({});
    } else if ( domain == 'CAQP' ) {
      Books = await CAQPModel.find({});
    } else {
      return res.status(400).json({ message: 'Invalid domain' });
    }
    res.json(Books); // Return the list of OS books as JSON
  } catch (error) {
    console.error('Error fetching OS books:', error);
    res.status(500).send('Internal Server Error');
  }
});

router.get('/fetch-courses/:domain', async (req, res) => {
  try {
    const domain = req.params.domain;
    let Courses;
    if (domain === 'OSC') {
      Courses = await OSCModel.find({});
    } else if ( domain == 'DBMSC' ) {
      Courses = await DBMSCModel.find({});
    } else if ( domain == 'DSAC' ) {
      Courses = await DSACModel.find({});
    } else if ( domain == 'CNC' ) {
      Courses = await CNCModel.find({});
    } else if ( domain == 'CAC' ) {
      Courses = await CACModel.find({});
    } else {
      return res.status(400).json({ message: 'Invalid domain' });
    }
    res.json(Courses); // Return the list of OS books as JSON
  } catch (error) {
    console.error('Error fetching OS books:', error);
    res.status(500).send('Internal Server Error');
  }
});

module.exports = router;

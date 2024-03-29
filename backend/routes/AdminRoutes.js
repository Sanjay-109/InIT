const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const multer = require('multer');
const { GridFSBucket } = require('mongodb');
const fs = require('fs');
const BookModel = require('../models/BookModel');
const OSModel = require('../models/OSModel');
const DBMSModel = require('../models/DBMSModel');
const DSAModel = require('../models/DSAModel');
const CNModel = require('../models/CNModel');
const CAModel = require('../models/CAModel');
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

router.get('/view-books', async (req, res) => {
    try {
      const Books = await BookModel.find({});
      res.json(Books);
    } catch (error) {
      console.error('Error fetching books:', error);
      res.status(500).send('Internal Server Error');
    }
});

router.get('/view-pdf/:fileName', (req, res) => {
    const { fileName } = req.params;
    const gfs = new GridFSBucket(conn.db, {
        bucketName: 'books'
    });
    // Find file metadata by filename
    gfs.find({ filename: fileName }).toArray((err, files) => {
        if (!files || files.length === 0) {
            return res.status(404).json({ message: 'File not found' });
        }

        // Get fileId from file metadata
        const fileId = files[0]._id;

        // Create read stream for file content
        const downloadStream = gfs.openDownloadStream(fileId);

        // Set response headers
        res.set('Content-Type', 'application/pdf');

        // Stream file content as response
        downloadStream.pipe(res);
    });
});


router.delete('/delete-book/:fileName', async (req, res) => {
    try {
        let { fileName } = req.params;
        const gfs = new GridFSBucket(conn.db, {
            bucketName: 'books'
        });

        if (fileName.endsWith('.pdf')) {
            fileName = fileName.slice(0, -4); // Remove the last 4 characters (".pdf")
        }

        // Delete book from MongoDB
        await BookModel.deleteOne({ fileName });
        const os = await OSModel.findOne({ fileName });
        const dbms = await DBMSModel.findOne({ fileName });
        const dsa = await DSAModel.findOne({ fileName });
        const cn = await CNModel.findOne({ fileName });
        const ca = await CAModel.findOne({ fileName });
        if (os) {
            await OSModel.deleteOne({ fileName });
        } else if (dbms) {
            await DBMSModel.deleteOne({ fileName });
        } else if (dsa) {
            await DSAModel.deleteOne({ fileName });
        } else if (cn) {
            await CNModel.deleteOne({ fileName });
        } else if (ca) {
            await CAModel.deleteOne({ fileName });
        } else {
            return res.status(404).json({ message: 'Book not found' });
        }

        if (!fileName.endsWith('.pdf')) {
            fileName += '.pdf';
        }

        // Find the file and delete it from GridFS
        const files = await gfs.find({ filename: fileName }).toArray();
        if (!files || files.length === 0) {
            return res.status(404).json({ message: 'File not found' });
        }

        const fileId = files[0]._id;
        await gfs.delete(fileId);

        // Delete file metadata from books.files collection
        await conn.db.collection('books.files').deleteOne({ _id: fileId });

        // Delete chunks associated with the file from books.chunks collection
        await conn.db.collection('books.chunks').deleteMany({ files_id: fileId });

        res.json({ message: 'Book and file deleted successfully' });
    } catch (error) {
        console.error('Error deleting book:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.get('/view-qps', async (req, res) => {
    try {
      const Qps = await QPModel.find({});
      res.json(Qps);
    } catch (error) {
      console.error('Error fetching books:', error);
      res.status(500).send('Internal Server Error');
    }
  });

  router.get('/view-qp/:fileName', (req, res) => {
    const { fileName } = req.params;
    const gfs = new GridFSBucket(conn.db, {
        bucketName: 'qps'
    });
    // Find file metadata by filename
    gfs.find({ filename: fileName }).toArray((err, files) => {
        if (!files || files.length === 0) {
            return res.status(404).json({ message: 'File not found' });
        }

        // Get fileId from file metadata
        const fileId = files[0]._id;

        // Create read stream for file content
        const downloadStream = gfs.openDownloadStream(fileId);

        // Set response headers
        res.set('Content-Type', 'application/pdf');

        // Stream file content as response
        downloadStream.pipe(res);
    });
});

router.delete('/delete-qp/:fileName', async (req, res) => {
    try {
        let { fileName } = req.params;
        const gfs = new GridFSBucket(conn.db, {
            bucketName: 'qps'
        });

        if (fileName.endsWith('.pdf')) {
            fileName = fileName.slice(0, -4); // Remove the last 4 characters (".pdf")
        }

        // Delete book from MongoDB
        await QPModel.deleteOne({ fileName });
        const os = await OSQPModel.findOne({ fileName });
        const dbms = await DBMSQPModel.findOne({ fileName });
        const dsa = await DSAQPModel.findOne({ fileName });
        const cn = await CNQPModel.findOne({ fileName });
        const ca = await CAQPModel.findOne({ fileName });
        if (os) {
            await OSQPModel.deleteOne({ fileName });
        } else if (dbms) {
            await DBMSQPModel.deleteOne({ fileName });
        } else if (dsa) {
            await DSAQPModel.deleteOne({ fileName });
        } else if (cn) {
            await CNQPModel.deleteOne({ fileName });
        } else if (ca) {
            await CAQPModel.deleteOne({ fileName });
        } else {
            return res.status(404).json({ message: 'Book not found' });
        }

        if (!fileName.endsWith('.pdf')) {
            fileName += '.pdf';
        }

        // Find the file and delete it from GridFS
        const files = await gfs.find({ filename: fileName }).toArray();
        if (!files || files.length === 0) {
            return res.status(404).json({ message: 'File not found' });
        }

        const fileId = files[0]._id;
        await gfs.delete(fileId);

        // Delete file metadata from books.files collection
        await conn.db.collection('qps.files').deleteOne({ _id: fileId });

        // Delete chunks associated with the file from books.chunks collection
        await conn.db.collection('qps.chunks').deleteMany({ files_id: fileId });

        res.json({ message: 'Question Paper and File deleted successfully' });
    } catch (error) {
        console.error('Error deleting book:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.get('/view-courses', async (req, res) => {
    try {
      const Courses = await CourseModel.find({});
      res.json(Courses);
    } catch (error) {
      console.error('Error fetching books:', error);
      res.status(500).send('Internal Server Error');
    }
});

router.delete('/delete-course/:link', async (req, res) => {
    try {
        let link = req.params.link;

        await CourseModel.deleteOne({ link });
        const os = await OSCModel.findOne({ link });
        const dbms = await DBMSCModel.findOne({ link });
        const dsa = await DSACModel.findOne({ link });
        const cn = await CNCModel.findOne({ link });
        const ca = await CACModel.findOne({ link });
        if (os) {
            await OSCModel.deleteOne({ link });
        } else if (dbms) {
            await DBMSCModel.deleteOne({ link });
        } else if (dsa) {
            await DSACModel.deleteOne({ link });
        } else if (cn) {
            await CNCModel.deleteOne({ link });
        } else if (ca) {
            await CACModel.deleteOne({ link });
        } else {
            return res.status(404).json({ message: 'Book not found' });
        }

        res.json({ message: 'Course deleted successfully' });
    } catch (error) {
        console.error('Error deleting course:', error);
        res.status(500).json({ message: 'Internal Server Error' });
    }
});

router.post('/upload-course/:domain', async (req, res) => {
    const { subject, link, rating, cost, enroll, description } = req.body;
    const domain = req.params.domain;
    
    await CourseModel.create({ subject, link, rating, cost, enroll, description });
        if (domain === 'OSC') {
          await OSCModel.create({ subject, link, rating, cost, enroll, description });
        } else if ( domain == 'DBMSC') {
          await DBMSCModel.create({ subject, link, rating, cost, enroll, description });
        } else if ( domain == 'DSAC'){
          await DSACModel.create({ subject, link, rating, cost, enroll, description });
        } else if ( domain == 'CNC'){
          await CNCModel.create({ subject, link, rating, cost, enroll, description });
        } else if ( domain == 'CAC'){
          await CACModel.create({ subject, link, rating, cost, enroll, description });
        } else {
          return res.status(400).json({ message: 'Invalid domain' });
        }
        
        res.send('File uploaded successfully');

  });

module.exports = router;

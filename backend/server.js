const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const InITRoutes = require('./routes/InITRoutes');
const pdfRoutes = require('./routes/pdfRoutes');
const AdminRoutes = require('./routes/AdminRoutes'); 
const bodyParser = require('body-parser');
const Grid = require('gridfs-stream');
const base64 = require('base64-js');
require('dotenv').config();

const app = express();

app.use(bodyParser.json());

// Configure CORS to allow requests from your frontend domain
app.use(cors({
  origin: 'https://init-frontend.vercel.app'
}));

app.use((req, res, next) => {
    console.log(req.path, req.method);
    next();
});

// routes 
app.use('/', InITRoutes);
app.use('/', pdfRoutes);
app.use('/', AdminRoutes);

// Connect to DB 
mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        // Listening to requests
        app.listen(process.env.PORT, process.env.HOST, () => {
            console.log(`Server is running on http://${process.env.HOST}:${process.env.PORT}`);
        });
    })
    .catch((error) => {
        console.log(error);
    });

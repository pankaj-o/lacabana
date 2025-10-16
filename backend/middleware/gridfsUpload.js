const multer = require('multer');
const GridFsStorage = require('multer-gridfs-storage');
const mongoose = require('mongoose');

// Create GridFS storage engine
const storage = new GridFsStorage({
  url: process.env.MONGODB_URI || 'mongodb://localhost:27017/lacabana',
  options: { useNewUrlParser: true, useUnifiedTopology: true },
  file: (req, file) => {
    return {
      bucketName: 'pdfs', // GridFS collection name
      filename: `${Date.now()}-${Math.round(Math.random() * 1E9)}${file.originalname}`,
      metadata: {
        originalName: file.originalname,
        title: req.body.title || file.originalname,
        description: req.body.description || '',
        uploadedAt: new Date()
      }
    };
  }
});

const fileFilter = (req, file, cb) => {
  // Only allow PDF files
  if (file.mimetype === 'application/pdf') {
    cb(null, true);
  } else {
    cb(new Error('Only PDF files are allowed!'), false);
  }
};

const upload = multer({
  storage: storage,
  limits: {
    fileSize: 10 * 1024 * 1024 // 10MB limit
  },
  fileFilter: fileFilter
});

module.exports = upload;

const multer = require('multer');
const { GridFSBucket } = require('mongodb');
const mongoose = require('mongoose');

// Memory storage for temporary file handling
const storage = multer.memoryStorage();

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

// Function to upload file to GridFS
const uploadToGridFS = async (file, metadata) => {
  const db = mongoose.connection.db;
  const bucket = new GridFSBucket(db, { bucketName: 'pdfs' });
  
  const filename = `${Date.now()}-${Math.round(Math.random() * 1E9)}-${file.originalname}`;
  
  const uploadStream = bucket.openUploadStream(filename, {
    metadata: {
      originalName: file.originalname,
      title: metadata.title || file.originalname,
      description: metadata.description || '',
      uploadedAt: new Date()
    }
  });

  return new Promise((resolve, reject) => {
    uploadStream.on('error', (error) => {
      reject(error);
    });

    uploadStream.on('finish', () => {
      resolve({
        id: uploadStream.id,
        filename: filename,
        originalName: file.originalname,
        size: file.size,
        mimetype: file.mimetype
      });
    });

    uploadStream.end(file.buffer);
  });
};

module.exports = { upload, uploadToGridFS };

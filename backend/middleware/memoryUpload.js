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
  // Wait for MongoDB connection to be ready
  const maxWaitTime = 10000; // 10 seconds
  const startTime = Date.now();
  
  while (mongoose.connection.readyState !== 1 && (Date.now() - startTime) < maxWaitTime) {
    await new Promise(resolve => setTimeout(resolve, 100));
  }
  
  if (mongoose.connection.readyState !== 1) {
    throw new Error('MongoDB connection not established after waiting');
  }
  
  const db = mongoose.connection.db;
  if (!db) {
    throw new Error('Database connection not available');
  }
  
  const bucket = new GridFSBucket(db, { bucketName: 'pdfs' });
  
  // Use original filename for GridFS storage, but ensure uniqueness
  const timestamp = Date.now();
  const fileExtension = file.originalname.split('.').pop();
  const baseName = file.originalname.replace(/\.[^/.]+$/, ""); // Remove extension
  const filename = `${baseName}-${timestamp}.${fileExtension}`;
  
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

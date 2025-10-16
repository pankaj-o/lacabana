const mongoose = require('mongoose');
const { GridFSBucket } = require('mongodb');

let bucket;

// Initialize GridFS
const initGridFS = () => {
  const db = mongoose.connection.db;
  bucket = new GridFSBucket(db, { bucketName: 'pdfs' });
};

// Get GridFS bucket
const getBucket = () => {
  if (!bucket) {
    initGridFS();
  }
  return bucket;
};

// Delete file from GridFS
const deleteFile = async (fileId) => {
  try {
    const bucket = getBucket();
    await bucket.delete(new mongoose.Types.ObjectId(fileId));
  } catch (error) {
    throw error;
  }
};

// Get file stream from GridFS
const getFileStream = (fileId) => {
  const bucket = getBucket();
  return bucket.openDownloadStream(new mongoose.Types.ObjectId(fileId));
};

// Get file info from GridFS
const getFileInfo = async (fileId) => {
  try {
    const bucket = getBucket();
    const files = await bucket.find({ _id: new mongoose.Types.ObjectId(fileId) }).toArray();
    return files[0] || null;
  } catch (error) {
    throw error;
  }
};

module.exports = {
  initGridFS,
  getBucket,
  deleteFile,
  getFileStream,
  getFileInfo
};

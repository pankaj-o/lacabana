const express = require('express');
const router = express.Router();
const Pdf = require('../models/Pdf');
const { upload, uploadToGridFS } = require('../middleware/memoryUpload');
const { deleteFile, getFileStream, getFileInfo } = require('../utils/gridfs');

// Upload PDF
router.post('/upload', upload.single('pdf'), async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No PDF file uploaded' });
    }

    const { title, description } = req.body;

    // Upload to GridFS
    const gridFSFile = await uploadToGridFS(req.file, { title, description });

    const pdf = new Pdf({
      title: title || req.file.originalname,
      description: description || '',
      filename: gridFSFile.filename,
      originalName: gridFSFile.originalName,
      fileId: gridFSFile.id, // GridFS file ID
      fileSize: gridFSFile.size,
      mimeType: gridFSFile.mimetype
    });

    await pdf.save();
    res.json({ message: 'PDF uploaded successfully', pdf });
  } catch (error) {
    console.error('Upload error:', error);
    res.status(500).json({ error: 'Failed to upload PDF' });
  }
});

// Get all PDFs
router.get('/', async (req, res) => {
  try {
    const pdfs = await Pdf.find({ isActive: true }).sort({ uploadedAt: -1 });
    res.json(pdfs);
  } catch (error) {
    console.error('Get PDFs error:', error);
    res.status(500).json({ error: 'Failed to fetch PDFs' });
  }
});

// Get single PDF
router.get('/:id', async (req, res) => {
  try {
    const pdf = await Pdf.findById(req.params.id);
    if (!pdf) {
      return res.status(404).json({ error: 'PDF not found' });
    }
    res.json(pdf);
  } catch (error) {
    console.error('Get PDF error:', error);
    res.status(500).json({ error: 'Failed to fetch PDF' });
  }
});

// Serve PDF file
router.get('/file/:id', async (req, res) => {
  try {
    const pdf = await Pdf.findById(req.params.id);
    if (!pdf) {
      return res.status(404).json({ error: 'PDF not found' });
    }

    // Get file info from GridFS
    const fileInfo = await getFileInfo(pdf.fileId);
    if (!fileInfo) {
      return res.status(404).json({ error: 'PDF file not found in database' });
    }

    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `inline; filename="${pdf.originalName}"`);
    res.setHeader('Content-Length', fileInfo.length);

    // Stream file from GridFS
    const readstream = getFileStream(pdf.fileId);
    readstream.pipe(res);

    readstream.on('error', (err) => {
      console.error('Stream error:', err);
      res.status(500).json({ error: 'Failed to stream PDF' });
    });
  } catch (error) {
    console.error('Serve PDF error:', error);
    res.status(500).json({ error: 'Failed to serve PDF' });
  }
});

// Delete PDF
router.delete('/:id', async (req, res) => {
  try {
    const pdf = await Pdf.findById(req.params.id);
    if (!pdf) {
      return res.status(404).json({ error: 'PDF not found' });
    }

    // Delete file from GridFS
    await deleteFile(pdf.fileId);

    // Delete PDF record from database
    await Pdf.findByIdAndDelete(req.params.id);
    res.json({ message: 'PDF deleted successfully' });
  } catch (error) {
    console.error('Delete PDF error:', error);
    res.status(500).json({ error: 'Failed to delete PDF' });
  }
});

// Update PDF (soft delete by setting isActive to false)
router.patch('/:id', async (req, res) => {
  try {
    const { title, description, isActive } = req.body;
    const pdf = await Pdf.findByIdAndUpdate(
      req.params.id,
      { title, description, isActive },
      { new: true }
    );
    
    if (!pdf) {
      return res.status(404).json({ error: 'PDF not found' });
    }
    
    res.json(pdf);
  } catch (error) {
    console.error('Update PDF error:', error);
    res.status(500).json({ error: 'Failed to update PDF' });
  }
});

module.exports = router;

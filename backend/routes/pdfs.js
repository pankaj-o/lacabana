const express = require('express');
const router = express.Router();
const Pdf = require('../models/Pdf');
const { upload, uploadToGridFS } = require('../middleware/memoryUpload');
const { deleteFile, getFileStream, getFileInfo } = require('../utils/gridfs');

// Upload PDF
router.post('/upload', upload.single('pdf'), async (req, res) => {
  try {
    console.log('Upload request received:', {
      hasFile: !!req.file,
      body: req.body,
      fileInfo: req.file ? {
        originalname: req.file.originalname,
        mimetype: req.file.mimetype,
        size: req.file.size
      } : null
    });

    if (!req.file) {
      return res.status(400).json({ error: 'No PDF file uploaded' });
    }

    const { title, description } = req.body;

    console.log('Starting GridFS upload...');
    // Upload to GridFS
    const gridFSFile = await uploadToGridFS(req.file, { title, description });
    console.log('GridFS upload completed:', gridFSFile);

    const pdf = new Pdf({
      title: title || req.file.originalname.replace(/\.[^/.]+$/, ""), // Remove extension from title
      description: description || '',
      filename: gridFSFile.filename,
      originalName: gridFSFile.originalName,
      fileId: gridFSFile.id, // GridFS file ID
      fileSize: gridFSFile.size,
      mimeType: gridFSFile.mimetype
    });

    console.log('Saving PDF to database...');
    await pdf.save();
    console.log('PDF saved successfully:', pdf._id);
    
    res.json({ message: 'PDF uploaded successfully', pdf });
  } catch (error) {
    console.error('Upload error details:', error);
    res.status(500).json({ error: 'Failed to upload PDF', details: error.message });
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

// Get PDF by original filename
router.get('/by-filename/:filename', async (req, res) => {
  try {
    const pdf = await Pdf.findOne({ 
      originalName: req.params.filename,
      isActive: true 
    });
    if (!pdf) {
      return res.status(404).json({ error: 'PDF not found' });
    }
    res.json(pdf);
  } catch (error) {
    console.error('Get PDF by filename error:', error);
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
    res.setHeader('Cache-Control', 'public, max-age=3600'); // Cache for 1 hour

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

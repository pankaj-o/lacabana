# La Cabana PDF Management System

This project includes a complete PDF management system with admin panel and frontend viewer.

## Features

- **Admin Panel**: Upload, manage, and delete PDF documents
- **PDF Viewer**: View PDFs directly in the browser with download option
- **MongoDB Storage**: All PDF metadata stored in MongoDB
- **File Management**: PDF files stored locally with unique naming
- **Responsive Design**: Works on desktop and mobile devices

## Setup Instructions

### Prerequisites

- Node.js (v14 or higher)
- MongoDB (running locally or MongoDB Atlas)
- npm or yarn

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Start MongoDB (if running locally):
```bash
# On Ubuntu/Debian
sudo systemctl start mongod

# On macOS with Homebrew
brew services start mongodb-community

# Or start manually
mongod
```

4. Update the MongoDB connection string in `backend/config.env` if needed:
```
MONGODB_URI=mongodb://localhost:27017/lacabana
```

5. Start the backend server:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the root directory:
```bash
cd ..
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## Usage

### Admin Panel
- Navigate to the admin panel using the "Admin" button in the top-right corner
- Upload PDFs with title and description
- View, edit, or delete uploaded PDFs
- All changes are immediately reflected in the frontend

### Document Viewer
- Use the "Documents" button to view all uploaded PDFs
- Click "View" to open PDFs in a full-screen viewer
- Click "Download" to download PDFs directly
- PDFs are displayed in an embedded iframe for easy viewing

### API Endpoints

- `GET /api/pdfs` - Get all PDFs
- `POST /api/pdfs/upload` - Upload a new PDF
- `GET /api/pdfs/:id` - Get specific PDF metadata
- `GET /api/pdfs/file/:id` - Serve PDF file
- `DELETE /api/pdfs/:id` - Delete PDF
- `PATCH /api/pdfs/:id` - Update PDF metadata

## File Structure

```
lacabana/
├── backend/
│   ├── models/
│   │   └── Pdf.js          # MongoDB schema
│   ├── routes/
│   │   └── pdfs.js         # API routes
│   ├── middleware/
│   │   └── upload.js       # Multer configuration
│   ├── uploads/            # PDF storage directory
│   ├── server.js           # Express server
│   └── package.json
├── src/
│   ├── components/
│   │   ├── AdminPanel.jsx  # Admin interface
│   │   ├── PdfViewer.jsx   # PDF viewer modal
│   │   └── PdfList.jsx     # PDF list display
│   └── App.jsx             # Main app with routing
└── package.json
```

## Configuration

### Environment Variables (backend/config.env)
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/lacabana
UPLOAD_DIR=uploads
```

### File Upload Limits
- Maximum file size: 10MB
- Allowed file types: PDF only
- Files are stored with unique names to prevent conflicts

## Troubleshooting

### Common Issues

1. **MongoDB Connection Error**
   - Ensure MongoDB is running
   - Check the connection string in config.env
   - Verify MongoDB is accessible on the specified port

2. **File Upload Errors**
   - Check file size (max 10MB)
   - Ensure file is a valid PDF
   - Verify uploads directory exists and is writable

3. **CORS Issues**
   - Backend is configured to allow all origins
   - If issues persist, check browser console for CORS errors

4. **PDF Not Displaying**
   - Check if the PDF file exists in the uploads directory
   - Verify the PDF is not corrupted
   - Check browser console for errors

## Security Notes

- This is a development setup
- For production, implement proper authentication
- Add file validation and virus scanning
- Use environment variables for sensitive data
- Implement rate limiting for API endpoints

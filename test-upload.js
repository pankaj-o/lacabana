const fs = require('fs');
const FormData = require('form-data');
const fetch = require('node-fetch');

// Test file upload functionality
async function testFileUpload() {
  try {
    console.log('Testing file upload functionality...');
    
    // Create a test PDF file (just a simple text file for testing)
    const testContent = 'This is a test PDF content for La Cabana restaurant menu.';
    fs.writeFileSync('test-menu.pdf', testContent);
    
    // Create form data
    const form = new FormData();
    form.append('title', 'Test Menu');
    form.append('description', 'Test menu for La Cabana');
    form.append('pdf', fs.createReadStream('test-menu.pdf'));
    
    // Upload file
    const response = await fetch('http://localhost:5000/api/pdfs/upload', {
      method: 'POST',
      body: form
    });
    
    if (response.ok) {
      const result = await response.json();
      console.log('✅ Upload successful!');
      console.log('File details:', {
        id: result.pdf._id,
        title: result.pdf.title,
        filename: result.pdf.filename,
        originalName: result.pdf.originalName,
        fileSize: result.pdf.fileSize
      });
      
      // Test fetching the uploaded file
      const getResponse = await fetch(`http://localhost:5000/api/pdfs/${result.pdf._id}`);
      if (getResponse.ok) {
        const pdfData = await getResponse.json();
        console.log('✅ File retrieval successful!');
        console.log('Retrieved file:', {
          title: pdfData.title,
          originalName: pdfData.originalName,
          filename: pdfData.filename
        });
      }
      
      // Clean up test file
      fs.unlinkSync('test-menu.pdf');
      
    } else {
      const error = await response.json();
      console.error('❌ Upload failed:', error);
    }
    
  } catch (error) {
    console.error('❌ Test failed:', error.message);
  }
}

// Run the test
testFileUpload();

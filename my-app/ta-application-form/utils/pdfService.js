const PDFDocument = require('pdfkit');
// const getStream = require('get-stream');

function createPDF(formData) {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument();
    let buffers = [];
    
    doc.on('data', buffers.push.bind(buffers));
    doc.on('end', () => {
      let pdfData = Buffer.concat(buffers);
      resolve(pdfData);
    });
    
    // Add content to the PDF
    doc.text(`First Name: ${formData.firstName}`, 10, 10);
    // Continue with other form data
    doc.end();
  });
}

module.exports = createPDF;

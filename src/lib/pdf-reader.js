import { PDFDocument } from 'pdf-lib';
import fs from 'fs';

async function readPdf() {
  // Load the PDF file into a buffer
  const pdfBuffer = fs.readFileSync('./SOP Anak TOKO KTD 2025.pdf');
  
  // Load the PDF document
  const pdfDoc = await PDFDocument.load(pdfBuffer);
  
  // Extract text from each page
  const pages = pdfDoc.getPages();
  const text = await pages[0].getText(); // Get text from the first page
  
  console.log(text); // Display the extracted text
}

readPdf();

import fs from 'fs';
import path from 'path';
import PDFParse from 'pdf-parse';

export async function getPdfText() {
  const filePath = path.join(process.cwd(), 'public/uploads', 'document.pdf'); // Sesuaikan nama file PDF

  try {
    // Membaca file PDF sebagai buffer
    const pdfBuffer = fs.readFileSync(filePath);
    
    // Mengonversi PDF menjadi teks
    const data = await PDFParse(pdfBuffer);
    
    // Mengembalikan teks yang diekstrak dari PDF
    return data.text;
  } catch (err) {
    console.error('Error reading PDF:', err);
    return null;
  }
}

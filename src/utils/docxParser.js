import fs from 'fs';
import path from 'path';
import mammoth from 'mammoth';

export async function getDocxText() {
  const filePath = path.join(process.cwd(), 'public/uploads', 'document.docx'); // Sesuaikan nama file DOCX

  try {
    // Membaca file DOCX sebagai buffer
    const fileBuffer = fs.readFileSync(filePath);

    // Mengonversi DOCX menjadi HTML atau teks
    const { value } = await mammoth.convertToHtml({ buffer: fileBuffer });
    
    // Mengembalikan teks atau HTML yang dihasilkan dari DOCX
    return value; // Bisa juga mengonversinya ke teks jika perlu
  } catch (err) {
    console.error('Error reading DOCX:', err);
    return null;
  }
}

// app/api/documents/route.js
import fs from 'fs';
import path from 'path';

// Path folder dokumen yang ada di dalam public
const documentsFolder = path.join(process.cwd(), 'public', 'documents');

export async function GET(req) {
  try {
    // Membaca semua file di folder 'public/documents'
    const files = fs.readdirSync(documentsFolder);

    // Filter hanya file PDF
    const pdfFiles = files.filter(file => file.endsWith('.pdf'));

    // Mengembalikan daftar file PDF dalam format JSON
    return new Response(JSON.stringify(pdfFiles), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(
      JSON.stringify({ message: 'Error reading directory', error: error.message }),
      { status: 500 }
    );
  }
}

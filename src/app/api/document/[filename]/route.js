// app/api/document/[fileName]/route.js
import fs from 'fs';
import path from 'path';

// Path folder dokumen yang ada di dalam public
const documentsFolder = path.join(process.cwd(), 'public', 'documents');

export async function GET({ params }) {
  const { fileName } = params;  // Mengambil fileName dari parameter URL
  const filePath = path.join(documentsFolder, fileName);  // Lokasi file PDF

  if (fs.existsSync(filePath)) {
    // Kirimkan file PDF jika ditemukan
    return new Response(fs.readFileSync(filePath), {
      status: 200,
      headers: { 'Content-Type': 'application/pdf' },
    });
  } else {
    return new Response(
      JSON.stringify({ message: 'File not found' }),
      { status: 404 }
    );
  }
}

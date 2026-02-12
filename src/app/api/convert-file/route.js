import { getPdfText } from '@/utils/pdfParses';  // Mengambil fungsi untuk PDF
import { getDocxText } from '@/utils/docxParser';  // Mengambil fungsi untuk DOCX

export async function handler(req, res) {
  const { fileType } = req.query; // Mendapatkan parameter fileType dari query

  let fileText;

  try {
    if (fileType === 'pdf') {
      // Mengonversi file PDF
      fileText = await getPdfText();
    } else if (fileType === 'docx') {
      // Mengonversi file DOCX
      fileText = await getDocxText();
    } else {
      return res.status(400).json({ message: 'Invalid file type' });
    }

    if (fileText) {
      return res.status(200).json({ text: fileText });
    } else {
      return res.status(500).json({ message: 'Error reading file' });
    }
  } catch (error) {
    console.error('Error during file conversion:', error);
    return res.status(500).json({ message: 'Error during file conversion', error: error.message });
  }
}

'use client';
import React, { createContext, useState, useContext, useEffect } from 'react';

// Dynamic import pdf.js hanya di client-side
import dynamic from 'next/dynamic';

// Memuat pdf.js secara dinamis hanya di browser (client-side)
const pdfjsLib = dynamic(() => import('pdfjs-dist'), { ssr: false });

const PDFContext = createContext();

export const PDFProvider = ({ children }) => {
  const [pdfFiles, setPdfFiles] = useState([]);
  const [pdfText, setPdfText] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Ambil daftar file PDF dari server (API)
  const fetchPdfFiles = async () => {
    setLoading(true);
    console.log('Fetching PDF files...'); // Log untuk memeriksa apakah fetchPdfFiles dijalankan
    try {
      const response = await fetch('/api/documents');
      const files = await response.json();
      console.log('Fetched PDF files:', files); // Log hasil file yang didapat dari API
      setPdfFiles(files);
    } catch (err) {
      setError('Error fetching PDF files: ' + err.message);
      console.log('Error fetching PDF files:', err); // Log jika ada error saat fetch
    }
    setLoading(false);
  };

  // Fungsi untuk mengekstrak teks dari file PDF tertentu
  const extractTextFromPDF = async (fileName) => {
    setLoading(true);
    console.log('Extracting text from file:', fileName); // Log untuk memeriksa apakah file yang dipilih diekstrak
    try {
      const response = await fetch(`/api/document/${fileName}`);
      const arrayBuffer = await response.arrayBuffer();

      console.log('Received arrayBuffer for', fileName, arrayBuffer); // Log arrayBuffer

      // Pastikan pdf.js sudah dimuat
      if (pdfjsLib) {
        console.log('pdf.js is loaded and ready'); // Log untuk memastikan pdf.js dimuat
        const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
        const numPages = pdf.numPages;

        let text = '';
        let hasExtractedText = false;

        for (let pageNum = 1; pageNum <= numPages; pageNum++) {
          const page = await pdf.getPage(pageNum);
          const content = await page.getTextContent();

          console.log(`Page ${pageNum} content.items:`, content.items); // Log isi dari content.items

          if (content.items && content.items.length > 0) {
            content.items.forEach(item => {
              text += item.str + ' ';
            });
            hasExtractedText = true;
          }
        }

        if (!hasExtractedText) {
          // Jika tidak ada teks yang diekstrak, lakukan OCR menggunakan Tesseract.js
          console.log('No text extracted, attempting OCR...');
          
          const canvas = document.createElement('canvas');
          const page = await pdf.getPage(1); // Ambil halaman pertama
          const viewport = page.getViewport({ scale: 1.0 });
          const context = canvas.getContext('2d');
          canvas.height = viewport.height;
          canvas.width = viewport.width;
          
          // Render halaman ke dalam canvas
          await page.render({ canvasContext: context, viewport: viewport }).promise;

          // Gunakan Tesseract.js untuk mengenali teks dari gambar
          Tesseract.recognize(
            canvas,
            'eng', // Bahasa yang digunakan
            {
              logger: (m) => console.log(m), // Log status OCR
            }
          ).then(({ data: { text } }) => {
            console.log('OCR Result:', text); // Log hasil OCR
            setPdfText(text); // Set hasil OCR sebagai teks
          });
        } else {
          setPdfText(text); // Set hasil ekstraksi teks biasa
        }
      }
    } catch (err) {
      setError('Error extracting PDF text: ' + err.message);
      console.log('Error extracting PDF text:', err); // Log error ekstraksi teks
    }
    setLoading(false);
  };

  // Fungsi untuk mengekstrak teks dari semua file PDF dalam folder 'public/documents'
  const extractAllPdfFiles = async () => {
    setLoading(true);
    console.log('Extracting text from all files...'); // Log sebelum ekstraksi teks dari semua file
    try {
      const allFiles = [];

      for (const fileName of pdfFiles) {
        const response = await fetch(`/documents/${fileName}`);
        const arrayBuffer = await response.arrayBuffer();

        console.log('Received arrayBuffer for all files:', fileName, arrayBuffer); // Log arrayBuffer

        // Pastikan pdf.js sudah dimuat
        if (pdfjsLib) {
          console.log('pdf.js is loaded and ready for all files');
          const pdf = await pdfjsLib.getDocument(arrayBuffer).promise;
          const numPages = pdf.numPages;

          let text = '';
          for (let pageNum = 1; pageNum <= numPages; pageNum++) {
            const page = await pdf.getPage(pageNum);
            const content = await page.getTextContent();
            content.items.forEach(item => {
              text += item.str + ' ';
            });
          }

          // Menambahkan hasil ekstraksi ke array untuk semua file
          allFiles.push({ fileName, text });
        }
      }

      // Mengembalikan hasil dalam bentuk JSON
      setPdfText(JSON.stringify(allFiles));  // Set hasil ekstraksi JSON
      console.log('All extracted text:', allFiles); // Log hasil JSON
    } catch (err) {
      setError('Error extracting all PDF files: ' + err.message);
      console.log('Error extracting all PDF files:', err); // Log jika ada error saat ekstraksi
    }
    setLoading(false);
  };

  // Fungsi log untuk mencetak data ke console
  const logData = () => {
    console.log("PDF Files:", pdfFiles);
    console.log("Extracted Text:", pdfText);
    console.log("Loading State:", loading);
    console.log("Error State:", error);
  };

  useEffect(() => {
    console.log('PDFContext mounted!');  // Log untuk memastikan komponen telah dimount
    fetchPdfFiles(); // Mengambil daftar file PDF saat aplikasi pertama kali dijalankan
  }, []); // Hanya dipanggil sekali saat komponen pertama kali dimuat

  return (
    <PDFContext.Provider value={{
      pdfText,
      pdfFiles,
      extractTextFromPDF,
      extractAllPdfFiles,
      logData, // Tambahkan fungsi log
      loading,
      error
    }}>
      {children}
    </PDFContext.Provider>
  );
};

export const usePDFContext = () => {
  return useContext(PDFContext);
};

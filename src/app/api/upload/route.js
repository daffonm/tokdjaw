// import multer from 'multer';
// import fs from 'fs';
// import path from 'path';

// // Tentukan folder penyimpanan file
// const uploadFolder = path.join(process.cwd(), 'public/uploads');

// // Pastikan folder 'uploads' ada
// if (!fs.existsSync(uploadFolder)) {
//   fs.mkdirSync(uploadFolder, { recursive: true });
// }

// // Konfigurasi multer untuk menyimpan file
// const storage = multer.diskStorage({
//   destination: (req, file, cb) => {
//     cb(null, uploadFolder); // Tentukan folder penyimpanan
//   },
//   filename: (req, file, cb) => {
//     cb(null, Date.now() + path.extname(file.originalname)); // Set nama file unik
//   },
// });

// const upload = multer({
//   storage,
//   limits: { fileSize: 10 * 1024 * 1024 }, // Maksimal 10MB
//   fileFilter: (req, file, cb) => {
//     const allowedTypes = ['image/jpeg', 'image/png', 'application/pdf']; // Tipe file yang diizinkan
//     if (!allowedTypes.includes(file.mimetype)) {
//       return cb(new Error('Invalid file type')); // Error jika tipe file tidak sesuai
//     }
//     cb(null, true);
//   },
// });

// // Handler untuk upload file
// export async function POST(req, res) {
//     console.log("lol")
//   const uploadMiddleware = (req, res) =>
//     new Promise((resolve, reject) => {
//       upload.single('file')(req, res, (err) => {
//         if (err) reject(err); // Kirim error jika terjadi masalah
//         else resolve();
//       });
//     });

//   try {
//     // Menangani upload file
//     console.log(req, res)
//     await uploadMiddleware(req, res);
//     if (!req.file) {
//       return res.status(400).json({ message: 'No file uploaded' });
//     }

//     return res.status(200).json({
//       message: 'File uploaded successfully',
//       file: req.file, // Kirim informasi file yang berhasil diupload
//     });
//   } catch (err) {
//     console.error('Error uploading file:', err);  // Debugging log
//     return res.status(500).json({
//       message: 'Error during file upload',
//       error: err.message || 'Unknown error',  // Pastikan error detail ada
//     });
//   }
// }

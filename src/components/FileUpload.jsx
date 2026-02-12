import React, { useState } from 'react';
import BasicPopUp from './BasicPopUp';

export default function FileUpload({ onClose }) {
  const [file, setFile] = useState(null);
  const [message, setMessage] = useState('');

  const onFileChange = (event) => {
    setFile(event.target.files[0]);
  };


  const onUpload = async () => {
  if (!file) {
    setMessage('Please choose a file to upload');
    return;
  }

  const formData = new FormData();
  formData.append('file', file);

  try {
    const res = await fetch('@/api/upload', {
      method: 'POST',
      body: formData,
    });

    if (!res.ok) {
      const errorText = await res.text();  // Coba baca body response sebagai teks
      setMessage(`Error: ${errorText}`);
      return;
    }

    // Jika response sukses, coba parse body JSON
    const data = await res.json();
    if (data) {
      setMessage(`File uploaded successfully: ${data.file.filename}`);
    } else {
      setMessage('Unexpected response format');
    }
  } catch (err) {
    setMessage(`Error: ${err.message}`);
  }
};


  return (
    <div>
      <BasicPopUp title="Upload a Document" onClose={onClose} onConfirm={onUpload}>
        <div className="flex flex-col gap-2">
          <input
            type="file"
            onChange={onFileChange}
            className="border p-1 cursor-pointer"
            accept=".pdf,.docx,.txt" // Optional: Restrict to certain file types
          />

          {message && <p>{message}</p>}
        </div>
      </BasicPopUp>
    </div>
  );
}

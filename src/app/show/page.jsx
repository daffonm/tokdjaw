"use client"

import React, { useState, useEffect } from 'react';

export default function ShowFile({ fileType }) {
  const [fileText, setFileText] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchFileText = async () => {
      try {
        const res = await fetch(`/api/convert-file?fileType=${fileType}`);
        const data = await res.json();

        if (res.ok) {
          setFileText(data.text);
        } else {
          setFileText('Error: ' + data.message);
        }
      } catch (err) {
        setFileText('Error: ' + err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchFileText();
  }, [fileType]);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h1>Converted {fileType.toUpperCase()} Text</h1>
      <pre>{fileText}</pre>
    </div>
  );
}

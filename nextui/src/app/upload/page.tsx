"use client";
import { useState } from "react";

export default function UploadPage() {
  const [file, setFile] = useState<File | null>(null);
  const handleUpload = () => {
    if (file) alert("File uploaded successfully!");
  };
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">File Upload Page</h2>
      <input type="file" onChange={(e) => setFile(e.target.files?.[0] || null)} className="mb-2" />
      <button onClick={handleUpload} className="bg-green-500 text-white px-4 py-2 rounded">Upload</button>
    </div>
  );
}
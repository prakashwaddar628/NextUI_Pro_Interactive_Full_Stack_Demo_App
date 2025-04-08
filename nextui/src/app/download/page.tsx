export default function DownloadPage() {
    const files = ["report.pdf", "invoice.docx", "image.jpg"];
    return (
      <div>
        <h2 className="text-xl font-bold mb-4">File Download Page</h2>
        <ul>
          {files.map((file, i) => (
            <li key={i} className="flex justify-between max-w-xs mb-2">
              <span>{file}</span>
              <button className="bg-blue-500 text-white px-3 py-1 rounded">Download</button>
            </li>
          ))}
        </ul>
      </div>
    );
  }
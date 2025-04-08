"use client";
import { useState } from "react";

const allItems = ["Item 1", "Item 2", "Item 3", "Item 4", "Item 5", "Item 6"];
const perPage = 2;

export default function PaginationPage() {
  const [page, setPage] = useState(1);
  const start = (page - 1) * perPage;
  const current = allItems.slice(start, start + perPage);

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Pagination Page</h2>
      <ul className="mb-2">
        {current.map((item, i) => <li key={i}>{item}</li>)}
      </ul>
      <div className="flex gap-2">
        <button disabled={page === 1} onClick={() => setPage(p => p - 1)} className="bg-gray-300 px-3 py-1 rounded">Previous</button>
        <button disabled={start + perPage >= allItems.length} onClick={() => setPage(p => p + 1)} className="bg-gray-300 px-3 py-1 rounded">Next</button>
      </div>
    </div>
  );
}
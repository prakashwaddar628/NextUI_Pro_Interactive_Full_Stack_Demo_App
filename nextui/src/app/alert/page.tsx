"use client";
import { useState } from "react";

export default function AlertPage() {
  const [confirmed, setConfirmed] = useState(false);

  const handleClick = () => {
    if (confirm("Do you want to proceed?")) setConfirmed(true);
  };

  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Alert Popup Page</h2>
      <button onClick={handleClick} className="bg-red-500 text-white px-4 py-2 rounded">Trigger Alert</button>
      {confirmed && <p className="mt-2 text-green-600">Alert accepted!</p>}
    </div>
  );
}
"use client";
import { useState } from "react";
import { format } from "date-fns";

export default function DatePickerPage() {
  const [date, setDate] = useState("");
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Date Picker Page</h2>
      <input type="date" onChange={(e) => setDate(e.target.value)} className="p-2 border rounded" />
      {date && <p className="mt-2">Selected Date: {format(new Date(date), "PPP")}</p>}
    </div>
  );
}
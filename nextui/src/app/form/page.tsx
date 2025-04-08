"use client";
import { useState } from "react";

export default function FormPage() {
  const [checkboxes, setCheckboxes] = useState({ a: false, b: false });
  const [radio, setRadio] = useState("");
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Form Page</h2>
      <div className="mb-4">
        <label className="block mb-1">Checkboxes:</label>
        <label><input type="checkbox" checked={checkboxes.a} onChange={() => setCheckboxes(p => ({...p, a: !p.a}))} /> A</label><br/>
        <label><input type="checkbox" checked={checkboxes.b} onChange={() => setCheckboxes(p => ({...p, b: !p.b}))} /> B</label>
      </div>
      <div>
        <label className="block mb-1">Radio Buttons:</label>
        <label><input type="radio" name="group" checked={radio === "x"} onChange={() => setRadio("x")} /> X</label><br/>
        <label><input type="radio" name="group" checked={radio === "y"} onChange={() => setRadio("y")} /> Y</label>
      </div>
    </div>
  );
}
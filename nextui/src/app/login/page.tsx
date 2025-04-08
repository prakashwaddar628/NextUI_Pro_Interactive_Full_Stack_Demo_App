// ✅ app/login/page.tsx
"use client";
import { useState } from "react";

export default function LoginPage() {
  const [emailSent, setEmailSent] = useState(false);
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Login Page</h2>
      <form className="flex flex-col gap-2 max-w-sm">
        <input type="email" placeholder="Email" className="p-2 border rounded" />
        <input type="password" placeholder="Password" className="p-2 border rounded" />
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Login</button>
        <button type="button" onClick={() => setEmailSent(true)} className="text-sm text-blue-600 text-left">Forgot Password?</button>
        {emailSent && <p className="text-green-500">Reset email sent!</p>}
      </form>
    </div>
  );
}
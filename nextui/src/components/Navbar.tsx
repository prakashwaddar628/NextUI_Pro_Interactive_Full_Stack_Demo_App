// ✅ Navbar (components/Navbar.tsx)
"use client";
import Link from "next/link";

const links = [
  "login", "upload", "download", "form", "date", "pagination", "alert"
];

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex gap-4 sticky top-0 z-50">
      {links.map((link) => (
        <Link key={link} href={`/${link}`} className="text-blue-600 hover:underline capitalize">
          {link}
        </Link>
      ))}
    </nav>
  );
}
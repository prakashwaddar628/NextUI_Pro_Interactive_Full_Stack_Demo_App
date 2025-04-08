import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-white shadow p-4 flex gap-4 sticky top-0 z-50">
      <Link href="/login">Login</Link>
      <Link href="/upload">Upload</Link>
      <Link href="/download">Download</Link>
      <Link href="/form">Form</Link>
      <Link href="/date">Date</Link>
      <Link href="/pagination">Pagination</Link>
      <Link href="/alert">Alert</Link>
    </nav>
  );
}

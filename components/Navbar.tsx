// 4. components/Navbar.tsx
// Reusable navigation, like a Java component
import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="bg-gray-800 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold">
          Your Name
        </Link>
        <div className="space-x-4">
          <Link href="/" className="hover:underline">
            Home
          </Link>
          <Link href="/blog" className="hover:underline">
            Blog
          </Link>
          <Link href="/gallery" className="hover:underline">
            Gallery
          </Link>
          <Link href="/shop" className="hover:underline">
            Shop
          </Link>
          <Link href="/checkers" className="hover:underline">
            Checkers
          </Link>
        </div>
      </div>
    </nav>
  );
}
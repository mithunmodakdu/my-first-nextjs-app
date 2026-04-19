"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Navbar = () => {
  const pathname = usePathname();
  console.log(pathname);
  return (
    <nav className="w-full bg-gray-900 text-white px-6 py-3 flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link href="/">Next.js</Link>
      </div>
      <div>
        <input
          type="text"
          className="p-5 w-96 h-5 bg-gray-100 rounded-xl text-gray-600"
          placeholder="Search here..."
        />
      </div>
      <div className="flex space-x-6">
        <Link
          href="/products"
          className={`${pathname === "/products" ? "text-blue-700 font-semibold underline" : "text-white hover:underline"}`}
        >
          Products
        </Link>

        {/* <a href="/about" className="hoover: text-gray-300">About</a> */}
        <Link href="/about" className={`${pathname === "/about" ? "text-blue-700 font-semibold underline" : "text-white hover:underline"}`}>
          About
        </Link>

        {/* <a href="/contact" className="hoover: text-gray-300">Contact</a> */}
        <Link href="/contact" className={`${pathname === "/contact" ? "text-blue-700 font-semibold underline" : "text-white hover:underline"}`}>
          Contact
        </Link>

        <Link href="/dashboard" className="hoover: text-gray-300">
          Dashboard
        </Link>

        {/* <a href="/login" className="hoover: text-gray-300">Login</a> */}
        <Link href="/login" className="hoover: text-gray-300">
          Login
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;

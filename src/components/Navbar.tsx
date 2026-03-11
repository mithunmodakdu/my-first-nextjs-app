import Link from "next/link";

const Navbar = () => {
  return (
    <nav className="w-full bg-gray-900 text-white px-6 py-3 flex justify-between items-center">
      <div className="text-xl font-bold">
        <Link href="/">
          Next.js
        </Link>
      </div>
      <div className="flex space-x-6">
        {/* <a href="/about" className="hoover: text-gray-300">About</a> */}
        <Link href="/about" className="hoover: text-gray-300">About</Link>

        {/* <a href="/contact" className="hoover: text-gray-300">Contact</a> */}
        <Link href="/contact" className="hoover: text-gray-300">Contact</Link>

        {/* <a href="/login" className="hoover: text-gray-300">Login</a> */}
        <Link href="/login" className="hoover: text-gray-300">Login</Link>
      </div>
    </nav>
  );
};

export default Navbar;
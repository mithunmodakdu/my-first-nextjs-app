import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="h-screen w-64 bg-gray-900 text-white flex flex-col">
      <div className="p-6 text-3xl font-bold border-b-2 border-gray-600">
        Dashboard
      </div>

      <nav className="flex-1 p-6 space-y-4">
        <Link href="/" className="block hover:text-gray-300">Home</Link>
        <Link href="/profile" className="block hover:text-gray-300">Profile</Link>
        <Link href="/settings" className="block hover:text-gray-300">Settings</Link>
      </nav>
    </aside>
  );
};

export default Sidebar;
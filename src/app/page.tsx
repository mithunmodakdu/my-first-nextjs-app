"use client"
// import Link from "next/link";

import { useRouter } from "next/navigation";

const HomePage = () => {
  const router = useRouter();

  const handleNavigation = () => {
    router.push("/dashboard")
  }
  return (
    <div>
      <h1 className="text-4xl">Home Page</h1>

      {/* <Link prefetch={false} href="/dashboard">
        <button className="bg-green-500 px-2 cursor-pointer">Dashboard</button>
      </Link> */}

      {/* <Link href="/dashboard">
        <button className="bg-green-500 px-2 cursor-pointer">Dashboard</button>
      </Link> */}

      <button onClick={handleNavigation} className="bg-green-500 px-2 cursor-pointer">Dashboard</button>

    </div>
  );
};

export default HomePage;
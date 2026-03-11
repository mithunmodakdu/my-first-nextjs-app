import Link from "next/link";

const HomePage = () => {
  return (
    <div>
      <h1 className="text-4xl">Home Page</h1>
      <Link href="/dashboard">
        <button className="bg-green-500 px-2 cursor-pointer">Dashboard</button>
      </Link>
    </div>
  );
};

export default HomePage;
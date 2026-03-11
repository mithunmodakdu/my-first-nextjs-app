import Navbar from "@/src/components/Navbar";

const CommonLayout = ({children}: {children: React.ReactNode}) => {
  return (
    <div>
      <Navbar/>
      <div className="min-h-dvh">
        {children}
      </div>
      <footer className="text-center mt-5 py-3 bg-gray-900 text-white">
          This is footer. copyright reserved 2026
      </footer>
    </div>
  );
};

export default CommonLayout;
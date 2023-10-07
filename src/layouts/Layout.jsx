import Sidebar from "../components/partials/Sidebar";
import Navbar from "../components/partials/Navbar";

const Layout = ({ children }) => {
  return (
    <div className="h-full relative font-sans">
      <div className="hidden h-screen md:flex md:w-72 md:flex-col md:fixed md:inset-y-0 z-[80] bg-gray-900">
        <Sidebar />
      </div>
      <main className="md:pl-72">
        <Navbar />
        {children}
      </main>
    </div>
  );
};

export default Layout;

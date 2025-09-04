


import Sidebar from '../components/Sidebar';
import Navbar from '../components/Navbar';
import { Outlet } from 'react-router-dom';


function DasboardLayout({ children }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-50 p-8">
      <Navbar/>
        <Outlet/>
      </main>
    </div>
  );
}

export default DasboardLayout;
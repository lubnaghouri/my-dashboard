


import React from 'react';
import Sidebar from './Sidebar';
import Dashboard from './Dashboard';
import Products from './Products';

function DasboardLayout({ children }) {
  return (
    <div className="flex h-screen">
      <Sidebar />
      <main className="flex-1 bg-gray-50 p-8">
        {children ? children : <Dashboard/> }
        <Products/>
      </main>
    </div>
  );
}

export default DasboardLayout;
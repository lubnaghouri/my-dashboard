


import React from 'react'

import { Search, CalendarDays, ChevronDown } from 'lucide-react';

function Dashboard() {
  return (
    <div className="flex flex-col gap-8">
      {/* Top Navbar */}
      <div className="flex items-center justify-between pt-2 pb-8">
        <div className="flex items-center gap-6">
          {/* Search Bar */}
          <div className="relative">
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 rounded-xl bg-white text-gray-500 border-none shadow focus:outline-none w-72"
            />
            <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
          </div>
          {/* Date Range */}
          <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white text-gray-500 shadow">
            <CalendarDays size={18} className="text-gray-400" />
            <span className="text-sm">Jul15,2023 - July29,2023</span>
          </div>
        </div>
        {/* User Avatar & Dropdown */}
        <div className="flex items-center gap-2">
          <img
            src="https://randomuser.me/api/portraits/women/44.jpg"
            alt="User"
            className="w-9 h-9 rounded-full object-cover border"
          />
          <ChevronDown size={18} className="text-gray-400" />
        </div>
      </div>

        {/* Main Content */}    
    </div>
  );
}

export default Dashboard
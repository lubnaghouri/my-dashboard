
import { Search, CalendarDays, ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

const Navbar = () => {
    return (
        <nav className="bg-white border-b border-gray-200 shadow-sm px-8 py-4 flex items-center justify-between">
            {/* Left: Logo & Search */}
            <div className="flex items-center gap-8">
                {/* Logo */}
                <span className="font-bold text-xl text-blue-600 tracking-tight">MyDashboard</span>
                {/* Search Bar */}
                <div className="relative">
                    <input
                        type="text"
                        placeholder="Search"
                        className="pl-10 pr-4 py-2 rounded-lg bg-gray-100 text-gray-700 border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-200 w-64 transition"
                    />
                    <Search className="absolute left-3 top-2.5 text-gray-400" size={20} />
                </div>
                {/* Date Range */}
                <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 text-gray-600 border border-gray-300">
                    <CalendarDays size={18} className="text-gray-400" />
                    <span className="text-sm font-medium">Jul 15, 2023 - Jul 29, 2023</span>
                </div>
            </div>
            {/* Right: User & Actions */}
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2 cursor-pointer hover:bg-gray-100 px-2 py-1 rounded-lg transition">
                    <img
                        src="https://randomuser.me/api/portraits/women/44.jpg"
                        alt="User"
                        className="w-9 h-9 rounded-full object-cover border border-gray-300"
                    />
                    <ChevronDown size={18} className="text-gray-400" />
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
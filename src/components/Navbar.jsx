

import { Search, CalendarDays, ChevronDown } from 'lucide-react';
import React, { useState } from 'react';

const Navbar = () => {
    const [showSignup, setShowSignup] = useState(false);
    const handleSignUpClick = () => {
        setShowSignup(true);
    };
    const handleCloseSignup = () => {
        setShowSignup(false);
    };

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
                {/* User Avatar, Dropdown & Sign Up Button */}
                <div className="flex items-center gap-4">
                    <button
                        onClick={handleSignUpClick}
                        className="bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold px-5 py-2 rounded-xl shadow hover:scale-105 transition-transform duration-150 hover:from-blue-600 hover:to-purple-700"
                    >
                        Sign Up
                    </button>
                    <img
                        src="https://randomuser.me/api/portraits/women/44.jpg"
                        alt="User"
                        className="w-9 h-9 rounded-full object-cover border"
                    />
                    <ChevronDown size={18} className="text-gray-400" />
                </div>
            </div>
            {/* Signup Form Modal */}
            {showSignup && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-40">
                    <div className="relative">
                        <button
                            onClick={handleCloseSignup}
                            className="absolute top-4 right-4 bg-gray-200 rounded-full px-3 py-1 text-gray-700 hover:bg-gray-300"
                        >
                            ✕
                        </button>
                        <SignupForm />
                    </div>
                </div>
            )}
        </div>
    )
}

export default Navbar
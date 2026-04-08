import React from "react";

const Header = () => {
  
  const handleLogout = () => {
    localStorage.setItem('loggedInUser','')
    window.location.reload();
  }
   const username = JSON.parse(localStorage.getItem("loggedInUser"));

  return (
    <div className="flex items-center justify-between p-6 ">
      <div className="flex items-center space-x-4">
        <div>
          <p className="text-gray-400 text-md font-medium">Welcome back,</p>
          <h1 className="mt-1 text-4xl font-bold text-white">
            {username?.data ? username.data.name : "Admin"} 👋
          </h1>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <div className="hidden md:flex items-center space-x-2 text-gray-400">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <span className="text-sm">{new Date().toLocaleDateString('en-US', { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' })}</span>
        </div>
        
        <button 
          onClick={handleLogout} 
          className="group flex items-center space-x-2 bg-red-600/20 hover:bg-red-600 text-red-400 hover:text-white px-4 py-2 rounded-xl border border-red-600/30 hover:border-red-600 transition-all duration-200"
        >
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          <span className="font-medium">Log Out</span>
        </button>
      </div>
    </div>
  );
};

export default Header;

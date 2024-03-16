import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux'





const Header = () => {
  const [loggedIn,setloggedIn]=useState(false)
    const x=useSelector(state=>state.auth.status)
    useEffect(() => {
      setloggedIn(x);
    }, [x]);
  return (
    <header className="flex justify-between items-center py-4 px-8 bg-gray-800 text-white">
      <div className="flex items-center">
        <div className="bg-gray-700 rounded-full h-12 w-12 flex items-center justify-center mr-4">
          <img src="/path/to/logo.png" alt="Logo" className="h-8 w-8" />
        </div>
        <h1 className="text-xl font-bold">Your App Name</h1>
      </div>
      <nav>
        {loggedIn ? (
          <Link to="/logout" className="mx-2">
            Logout
          </Link>
        ) : (
          <>
            <Link to="/signup" className="mx-2">
              Signup
            </Link>
            <Link to="/login" className="mx-2">
              Login
            </Link>
          </>
        )}
      </nav>
    </header>
  );
};

export default Header;

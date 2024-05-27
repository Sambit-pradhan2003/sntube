import React, { useState,useEffect } from 'react';
import { Link } from 'react-router-dom';
import {useDispatch, useSelector } from 'react-redux'
import axios from 'axios';
//import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/authslice';





const Header = ({ toggleSidebar }) => {
  const dispatch = useDispatch();
  const [isloggedIn, setisLoggedIn] = useState(false);
  const [loggedIn,setloggedIn]=useState(false)
    const x=useSelector(state=>state.auth.status)
    useEffect(() => {
      setloggedIn(x);
    }, [x]);
    // console.log(loggedIn)
    // console.log(isloggedIn)
    const handleLogout = async () => {
      try {
        await axios.post("/api/v1/users/logout");
        await dispatch(logout());
        localStorage.removeItem('isLoggedIn1');
      } catch (error) {
        console.log("Error fetching data", error);
      }
    };


  return (
    <nav className=" h-15 flex items-center justify-between p-4 bg-blue-500 text-white">
      <div className="flex items-center">
        <button onClick={toggleSidebar} className="mr-4 p-2 bg-blue-700 rounded">
          ☰
        </button>
        <img src="/path-to-your-logo.png" alt="Logo" className="h-8 w-8 mr-2"/>
        <span className="text-xl font-bold">App Name</span>
      </div>
      <div>
      {loggedIn || isloggedIn ? (<div className="h-15  flex items-center justify-between p-4 bg-blue-500 text-white">
          <Link to="/" >
          <button onClick={handleLogout} className="mx-2">
            Logout
          </button>
          </Link>
          <Link to="/">
          <img src="/path-to-your-logo.png" alt="Logo" className="h-8 w-8 mr-2"/>
          </Link>
          </div>
          
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
      </div>
    </nav>
  );
};

export default Header;

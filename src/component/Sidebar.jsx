import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar({ isOpen, toggleSidebar }) {
  return (
    <div className={`w-36 fixed inset-y-0 left-0 bg-gray-800 text-white transform ${isOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out`}>
    <button onClick={toggleSidebar} className="p-4">Close</button>
    <div className="text-white fixed h-full flex flex-col p-4 w">
      <Link to="/" className="mb-4">Home</Link>
      <Link to="/Likedvideos" className="mb-4">like Videos</Link>
      <Link to="/History" className="mb-4">History</Link>
      <Link to="/Myprofile" className="mb-4">Myprofile</Link>
      <Link to="/Collection" className="mb-4">Collection</Link>
      <Link to="/create" className="mb-4">create</Link>
    </div>
  </div>
  )
}

export default Sidebar

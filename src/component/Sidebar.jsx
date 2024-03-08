import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
  return (
    <div className="bg-gray-800 text-white fixed h-full flex flex-col p-4">
      <Link to="/" className="mb-4">Home</Link>
      <Link to="/Likedvideos" className="mb-4">like Videos</Link>
      <Link to="/History" className="mb-4">History</Link>
      <Link to="/Mycontent" className="mb-4">Mycontents</Link>
      <Link to="/Collection" className="mb-4">Collection</Link>
      <Link to="/Subscribers" className="mb-4">Subscibers</Link>
    </div>
  )
}

export default Sidebar

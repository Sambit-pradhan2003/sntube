import React from 'react'
import {Link,NavLink}from'react-router-dom'

function Header() {
  return (
    <nav className="bg-gray-700 p-4 fixed w-full top-0">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-lg font-bold">
          SNTube
        </Link>
        <div className="flex space-x-4">
          <Link to="/login" className="text-white">
            login
          </Link>
          <Link to="/signup" className="text-white">
            About
          </Link>
          
        </div>
      </div>
    </nav>

  )
}

export default Header

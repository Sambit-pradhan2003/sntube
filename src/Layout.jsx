import React from 'react'
import { Outlet } from 'react-router-dom'
import Header from '../src/component/Header/Header.jsx'
import Sidebar from '../src/component/Sidebar.jsx'

function Layout() {
  return (
    <div>
      <Header />
      <div className='mt-14 grid sm:grid-cols-12'>
        <div className='flex-grow sm:col-span-1 sm:block hidden'>
          <Sidebar />
        </div>
        <div className=' sm:col-span-11'>
          <Outlet />
        </div>
      </div>


    </div>
  )
}

export default Layout

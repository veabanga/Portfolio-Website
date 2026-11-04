import React from 'react'
import { NavLink, useLocation } from 'react-router-dom'

const Navbar = () => {
  const { pathname } = useLocation();
  const inactiveLinkColor = pathname === '/' ? 'text-white' : 'text-[#3b251F]';

  return (
    <header className='header'>
        <NavLink to="/" className='w-10 h-10 rounded-lg bg-white 
        items-center justify-center flex font-bold shadow-md'>
            <p className='pink-gradient_text'>VB</p>        
        </NavLink>
        <nav className='flex text-lg gap-7 font-medium'>
            <NavLink to='/about' className={({ isActive }) =>
              isActive ? 'text-pink-500' : inactiveLinkColor}>
                About
            </NavLink>
            <NavLink to='/projects' className={({ isActive }) =>
              isActive ? 'text-pink-500' : inactiveLinkColor}>
                Projects
            </NavLink>
            <NavLink to='/contact' className={({ isActive }) =>
              isActive ? 'text-pink-500' : inactiveLinkColor}>
                Contact
            </NavLink> 
        </nav>
    </header>
  )
}

export default Navbar

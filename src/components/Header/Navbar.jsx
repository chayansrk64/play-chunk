import React from 'react';
import logo from '../../assets/logo.png'
import { Link, NavLink } from 'react-router';
import { Github } from 'lucide-react';
 

const Navbar = () => {

    

    const links = <>
        <NavLink to='/'>
        {({isActive}) => (<li className={isActive ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-semibold me-6" : "text-black-500 font-semibold me-6"}>Home</li>)}
        </NavLink>
        <NavLink to='/apps'>
        {({isActive}) => (<li className={isActive ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-semibold me-6" : "text-black-500 font-semibold me-6"}>Apps</li>)}
        </NavLink>
        <NavLink to='/installations'>
        {({isActive}) => (<li className={isActive ? "bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-semibold me-6" : "text-black-500 font-semibold me-0"}>Installation</li>)}
        </NavLink>
        
    </>

    return (
        <div className='bg-base-100 shadow-sm'>
        <div className="navbar  max-w-[1440px] mx-auto">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex={0}
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <Link to="/" className=" text-xl font-semibold flex items-center"> <img className='w-[40px]' src={logo} alt="" /> <span className='bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Play Chunk</span></Link>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
       {links}
    </ul>
  </div>
  <div className="navbar-end">
    <a href='https://github.com/chayansrk64/' className="flex items-center bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-3 py-2 rounded text-white font-semibold"><Github /> Contribute</a>
  </div>
</div>
</div>
    );
};

export default Navbar;
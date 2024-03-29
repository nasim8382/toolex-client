import React from 'react';
import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link } from "react-router-dom";
import auth from "../../firebase.init";
import './Navbar.css';
import logo from '../../images/header_logo.png';

const Navbar = () => {
    const [user] = useAuthState(auth);

    const logout = () => {
        signOut(auth);
        localStorage.removeItem('accessToken');
    };

    const menuItems = (
        <>
          <li><Link to="/home">Home</Link></li>
    
          {
            user && <li><Link to="/dashboard">Dashboard</Link></li>
          }
    
         <li><Link to="/blogs">Blogs</Link></li>
          <li><Link to="/portfolio">Portfolio</Link></li>
    
          {
            user && <li><Link to="/dashboard">{user?.displayName}</Link></li>
          }

          <li>{user ? <button className="btn btn-ghost capitalize sm:flex sm:flex-start"  onClick={logout} >Log Out</button> : <Link to="/login">Login</Link>}</li>
        </>
      );

    return (
        <div className='bg-secondary'>
        <div className="navbar max-w-7xl mx-auto px-2 md:px-12">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex="0" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex="0"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-secondary rounded-box w-52"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/home"><img className='h-8 md:h-10 pl-5 lg:pl-1' src={logo} alt="" /></Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
  
        <div className="navbar-end">
                  <label tabIndex="1" htmlFor="dashboard-sidebar" className="btn btn-ghost lg:hidden">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                  </label>
              </div>
      </div>
      </div>
    );
};

export default Navbar;
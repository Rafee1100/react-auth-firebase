import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
import './Header.css'





const Header = () => {
    return (
        <div>
           <nav className='header'>
               <h3 className='col-md-6'>Cholo Jai</h3>
               <ul className='navigation col-md-6'>
                   <Link className="navElement" to="/home">Home</Link>
                   <Link className="navElement"  to="/destination">Destination</Link>
                   <Link className="navElement"  to="/blog">Blog</Link>
                   <Link className="navElement"  to="/contact">Contact</Link>
                   <Link className="navElement"  to="/login">Login</Link>
               </ul>
           </nav>
        </div>
    );
};

export default Header;
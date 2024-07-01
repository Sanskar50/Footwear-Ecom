import '@fortawesome/fontawesome-free/css/all.min.css';
import React, { useState, useEffect } from 'react';
import SideBar from './sideBar';
import { Link, Router, Routes, BrowserRouter } from 'react-router-dom';

const NavBar = () => {

    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    const toggleSidebar = () => {
        setIsSidebarOpen(!isSidebarOpen);
    };

    return (
        <div className="navbar">
            <h1 className="company"><Link className="navLink" to="/">NEEMAN'S</Link></h1>
            <div className="midHeadings">
                        <Link className="navLink" to="/derbies">NEW</Link>
                        <Link className="navLink" to="/movers">MEN</Link>
                        <Link className="navLink" to="/slipon">WOMEN</Link>
                        <Link className="navLink" to="/offers">OFFERS</Link>
                        <Link className="navLink-about" to="/about-us">ABOUT US</Link>
            </div>

            <div className="cornerHeadings">
                <a id="corner-btn" ><i className="fas fa-search"></i> Search</a>
                <a id="corner-btn" ><i className="fas fa-store"></i> <p class="find-stores">FIND STORES</p></a>
                <a onClick={toggleSidebar} id="corner-btn" className="cart-btn"> <i className="fas fa-shopping-cart"></i>CART</a>
            </div>
            <SideBar isSidebarOpen={isSidebarOpen} toggleSidebar={toggleSidebar} />
        </div>

    );
}

export default NavBar;
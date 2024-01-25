import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
    const listItems = <>
        <li><a>Home</a></li>
        <li><a>Shop</a></li>
        <li><a>Contact</a></li>
        <li><a>Offers</a></li>
    </>
    return (
        <div className="navbar bg-orange-50 px-10">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </div>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52">
                        {listItems}
                    </ul>
                </div>
                <NavLink to='/' className="text-xl"><img src="/src/assets/icons/logo.png" className='h-16 mb-4' alt="" /></NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {listItems}
                </ul>
            </div>
            <div className="navbar-end">
                <ul className='flex items-center justify-center'>
                    <li><a><img src="/src/assets/icons/profile.png" alt="" className='h-8' /></a></li>
                    <li><a><img src="/src/assets/icons/fav.png" alt="" className='h-8' /></a></li>
                    <li><a><img src="/src/assets/icons/cart.png" alt="" className='h-8' /></a></li>
                </ul>
            </div>
        </div>
    );
};

export default NavBar;
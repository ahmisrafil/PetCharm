import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import { BsChevronDown } from "react-icons/bs";

const NavBar = () => {
    const listItems = <>
        <li className='hover:text-red-500'><a>Home</a></li>
        <li className='hover:text-red-500'><a>Shop</a></li>
        <li ><a><div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className='hover:text-red-500 flex flex-row items-center gap-1'>Cats <BsChevronDown/></div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Cats Dry Food</a></li>
                <li><a>Cats Wet Food</a></li>
                <li><a>Cats Treats</a></li>
                <li><a>Cats Health Supplements</a></li>
                <li><a>Cats Fashion</a></li>
            </ul>
        </div></a></li>
        <li><a><div className="dropdown dropdown-hover ">
            <div tabIndex={0} role="button" className='hover:text-red-500 flex flex-row items-center gap-1'>Dogs<BsChevronDown/></div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Dogs Dry Food</a></li>
                <li><a>Dogs Wet Food</a></li>
                <li><a>Dogs Treats</a></li>
                <li><a>Dogs Health Supplements</a></li>
                <li><a>Dogs Fashion</a></li>
            </ul>
        </div></a></li>
        <li><a><div className="dropdown dropdown-hover">
            <div tabIndex={0} role="button" className='hover:text-red-500 flex flex-row items-center gap-1'>Birds<BsChevronDown/></div>
            <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li><a>Birds Food & Health</a></li>
                <li><a>Birds Toys & Accessories</a></li>
            </ul>
        </div></a></li>
        <li className='hover:text-red-500'><a>Contact</a></li>
        <li className='hover:text-red-500'><Link to="offers">Offers</Link></li>


    </>
    return (
        <div className="navbar h-10 bg-orange-50 px-10">
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
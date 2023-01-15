import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    //header menus
    const menuItems = <>
        <li><input type="text" placeholder="Search" className="input input-bordered rounded-none" /></li>
        <li><button className="btn w-24 rounded-none text-xl lg:mt-0 mt-1 lg:ml-2 text-black bg-lime-500">25</button></li>
        <li><button className="btn w-24 rounded-none text-xl lg:mt-0 mt-1 lg:ml-2 text-white bg-red-500">25</button></li>
    </>
    return (
        <div>
            <div className="navbar bg-blue-900">
                <div className="navbar-start">
                    {/* responsive toggle */}
                    <div className="dropdown">
                        <label tabIndex={0} className="btn bg-blue-900 focus:bg-blue-900 active:bg-blue-900 border-0 lg:hidden btn-toogle text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                        </label>
                        <ul tabIndex={1} className="menu menu-compact dropdown-content mt-3 p-2 shadow rounded-box w-[250px] bg-blue-900">
                            {menuItems}
                        </ul>
                    </div>

                    <div className="flex-1 text-start">
                        <Link to='/' className="normal-case text-2xl text-green-500"><span className='text-3xl'>S</span>ECQUR<span className='text-3xl text-red-500'>AI</span>SE</Link>
                    </div>
                </div>

                <div className="gap-2 navbar-end hidden lg:flex">
                    <ul className="menu menu-horizontal p-0">
                        {menuItems}
                    </ul>
                </div>


            </div>
        </div>
    );
};

export default Navbar;
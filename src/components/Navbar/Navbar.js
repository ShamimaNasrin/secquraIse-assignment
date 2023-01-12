import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    return (
        <div>
            <div className="navbar bg-blue-900">
                <div className="flex-1">
                    <Link to='/' className="normal-case text-2xl text-green-500"><span className='text-3xl'>S</span>ECQUR<span className='text-3xl text-red-500'>AI</span>SE</Link>
                </div>
                <div className="flex-none gap-2">
                    <div className="form-control">
                        <input type="text" placeholder="Search" className="input input-bordered" />
                    </div>
                    <div className="navbar-end">
                        <button className="btn w-24 rounded-none text-xl text-black bg-lime-500">25</button>
                        <button className="btn w-24 rounded-none text-xl ml-2 bg-red-500">25</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Navbar;
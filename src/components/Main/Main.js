import React from 'react';
import Navbar from '../Navbar/Navbar';
import UserDetails from '../UserDetails/UserDetails';
import UserList from '../UserList/UserList';

const Main = () => {
    return (
        <div>
            <div className=''>
                <Navbar></Navbar>
                <div className="grid lg:grid-cols-3 grid-cols-1 h-[92vh]">
                    <div className='lg:col-span-2 w-full'>
                        <UserDetails></UserDetails>
                    </div>
                    <div className='w-full lg:mt-0 mt-8 mx-auto'>
                        <UserList></UserList>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
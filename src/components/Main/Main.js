import React from 'react';
import Navbar from '../Navbar/Navbar';
import UserDetails from '../UserDetails/UserDetails';
import UserList from '../UserList/UserList';

const Main = () => {
    return (
        <div>
            <div className=''>
                <Navbar></Navbar>
                <div className="grid grid-cols-3 h-[92vh]">
                    <div className='col-span-2 w-full'>
                        <UserDetails></UserDetails>
                    </div>
                    <div className='w-full'>
                        <UserList></UserList>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
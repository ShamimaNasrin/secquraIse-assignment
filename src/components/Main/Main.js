import React from 'react';
import Navbar from '../Navbar/Navbar';
import UserDetails from '../UserDetails/UserDetails';
import UserList from '../UserList/UserList';

const Main = () => {
    return (
        <div>
            <div className=''>
                <Navbar></Navbar>
                <div className="grid grid-cols-2 h-[92vh]">
                    <div className='w-7/12'>
                        <UserDetails></UserDetails>
                    </div>
                    <div className=''>
                        <UserList></UserList>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
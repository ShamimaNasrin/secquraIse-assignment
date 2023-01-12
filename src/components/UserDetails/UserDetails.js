import React from 'react';
import { IoMdMenu } from "react-icons/io";
import { RiLogoutBoxRLine } from "react-icons/ri";

const UserDetails = () => {
    return (
        <div className='flex h-full border'>
            {/* left blue bar */}
            <div className='bg-sky-400 w-[20%] flex flex-col justify-between'>
                <IoMdMenu className='text-3xl mx-auto mt-1 text-white'></IoMdMenu>
                <RiLogoutBoxRLine className='text-3xl mx-auto mb-10 text-white'></RiLogoutBoxRLine>
            </div>
            <div className='flex pl-5 w-full'>
                {/* person info */}
                <div className="flex flex-col text-start pt-7">
                    <div className='mt-10'>
                        <p className='text-2xl font-bold'>EVT0050</p>
                        <p className='text-xl font-bold'>Person Detected</p>
                    </div>
                    <div className='grid grid-cols-2 mt-6 font-semibold w-4/6'>
                        <div>
                            <p>Name</p>
                        </div>
                        <div>
                            <p>: Female25</p>
                        </div>
                        <div>
                            <p>Location</p>
                        </div>
                        <div>
                            <p>: Chennai</p>
                        </div>
                        <div>
                            <p>Date</p>
                        </div>
                        <div>
                            <p>: 09-Jan-23</p>
                        </div>
                        <div>
                            <p>Time</p>
                        </div>
                        <div>
                            <p>: 13:32:13</p>
                        </div>

                    </div>
                    <div className='mt-6 font-semibold'>
                        <p>Description:</p>
                        <p className='w-4/6 '>Female25 detected at Chennai on 9th January, 2023.</p>
                    </div>
                </div>
                {/* person photo */}
                <div className="border">

                </div>
            </div>
        </div>
    );
};

export default UserDetails;
import React from 'react';
import { RiMenuFoldFill } from "react-icons/ri";
import ListCard from './ListCard';

const UserList = () => {
    return (
        <div className='border-8 border-zinc-200 p-2'>

            {/* section one start */}
            <div className='flex justify-between items-start'>
                <p className='text-2xl font-bold text-start'>Events</p>

                {/* filter drop down start */}
                <div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className=""><RiMenuFoldFill className='text-4xl text-black'></RiMenuFoldFill></label>
                        <form className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'>
                            <div className='grid grid-cols-1 gap-2'>

                                <div className="form-control">
                                    <select name='location' className="outline-blue-500 p-1 w-full bg-white border-primary">
                                        <option>Bangalore</option>
                                        <option>Chennai</option>
                                        <option>Hyderabad </option>
                                    </select>
                                </div>

                                <div className="form-control">
                                    <select name='gender' className="outline-blue-500 p-1 w-full bg-white border-primary">
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </div>

                                <div className="form-control">
                                    <input className='outline-blue-500 p-1 w-full bg-white border-primary' type="date" name="date" />
                                </div>

                            </div>
                        </form>
                    </div>
                </div>
                {/* filter drop down end */}

            </div>
            {/* section one end */}

            {/* section two(List of person) start */}
            <div className="grid grid-cols-1 gap-2 mt-3">
                {
                    [...Array(7)].map((card, i) => <ListCard
                        key={i}
                        card={card}></ListCard>)
                }
            </div>
            {/* section two(List of person) end */}
        </div>
    );
};

export default UserList;
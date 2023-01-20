import React, { useState } from 'react';
import { RiMenuFoldFill } from "react-icons/ri";
import ListCard from './ListCard';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../../firebase/firebase.config';
import { format, compareAsc } from 'date-fns'

const UserList = ({ data, handleSelectedPerson }) => {
    const [filterData, setFilterData] = useState(data);

    // filter data accoring to location, gender and date
    const handleFilter = (event) => {
        event.preventDefault();
        const form = event.target;
        const location = form.location.value;
        const gender = form.gender.value;
        const date = form.date.value;
        const newDate = format(new Date(date), 'd-MMM-yy')
        //console.log(location, gender, newDate);

        const personCollection = collection(db, "personcollection");
        const q = query(personCollection, where("Gender", "==", gender), where("Location", "==", location), where("Date", "==", newDate));

        const fetchQueryData = async () => {
            let listData = [];
            try {
                const queryDatas = await getDocs(q);
                queryDatas.forEach((doc) => {
                    listData.push({ id: doc.id, ...doc.data() });
                });
                setFilterData(listData);
                //console.log(listData);
            }
            catch (err) {
                console.log(err);
            }
        };
        fetchQueryData();
    }

    return (
        <div className='border-8 border-zinc-200 p-2 h-[90vh] overflow-y-auto'>

            {/* section one start */}
            <div className='flex justify-between items-start'>
                <p className='text-2xl font-bold text-start'>Events</p>

                {/* filter drop down start */}
                <div>
                    <div className="dropdown dropdown-end">
                        <label tabIndex={0} className=""><RiMenuFoldFill className='text-4xl text-black'></RiMenuFoldFill></label>
                        <form onSubmit={handleFilter} className='dropdown-content menu p-2 shadow bg-base-100 rounded-box w-52'>
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

                            <button type='submit' className='btn btn-sm border-none bg-blue-900 hover:bg-blue-700 hover:border-none'>submit</button>
                        </form>
                    </div>
                </div>
                {/* filter drop down end */}

            </div>
            {/* section one end */}

            {/* section two(List of person) start */}
            <div className="grid grid-cols-1 gap-2 mt-3">
                {
                    filterData.map((person) => <ListCard
                        key={person.id}
                        person={person}
                        handleSelectedPerson={handleSelectedPerson}
                    ></ListCard>)
                }
            </div>
            {/* section two(List of person) end */}
        </div>
    );
};

export default UserList;
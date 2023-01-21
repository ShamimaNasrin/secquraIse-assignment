import React, { useState } from 'react';
import { RiMenuFoldFill } from "react-icons/ri";
import ListCard from './ListCard';
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from '../../firebase/firebase.config';
import { format, compareAsc } from 'date-fns'

const UserList = ({ handleSelectedPerson }) => {
    const [filterData, setFilterData] = useState(null);
    const [allData, setAllData] = useState([]);

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

    const handleSeeAll = () => {
        const fetchData = async () => {
            let list = [];
            try {
                const querySnapshot = await getDocs(collection(db, "personcollection"));
                querySnapshot.forEach((doc) => {
                    list.push({ id: doc.id, ...doc.data() });
                });
                setFilterData(list);
                //console.log(list);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }


    return (
        <div className='border-8 border-zinc-200 p-2 h-[90vh] '>

            {/* section one start */}
            <div className='flex justify-between items-start'>
                <p className='text-2xl font-bold text-start'>Events</p>

                <div onClick={handleSeeAll} className="form-control">
                    <label className="label cursor-pointer">
                        <span className="btn btn-sm border-none bg-blue-900 hover:bg-blue-700 hover:border-none text-sm font-semibold mr-1">See All</span>     
                    </label>
                </div>

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
                                    <input className='outline-blue-500 p-1 w-full bg-white border-primary' type="date" name="date" required />
                                </div>

                            </div>

                            <div className='flex justify-evenly'>
                                <button type='submit' className='btn btn-sm border-none bg-blue-900 hover:bg-blue-700 hover:border-none'>submit</button>
                            </div>
                        </form>
                    </div>
                </div>
                {/* filter drop down end */}

            </div>
            {/* section one end */}

            {/* section two(List of person) start */}

            <div className="grid grid-cols-1 gap-2 mt-3 max-h-[92%] overflow-y-auto">
                {
                    filterData ?
                        filterData.map((person) => <ListCard
                            key={person.id}
                            person={person}
                            handleSelectedPerson={handleSelectedPerson}
                        ></ListCard>)

                        :
                        <div className="flex justify-center items-center mx-auto">
                            <h2 className="text-xl mt-5 font-semibold">Choose location, gender and date first</h2>
                        </div>
                }
            </div>

            {/* section two(List of person) end */}
        </div>
    );
};

export default UserList;
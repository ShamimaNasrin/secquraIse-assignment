import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import UserDetails from '../UserDetails/UserDetails';
import UserList from '../UserList/UserList';
import { collection, getDocs } from "firebase/firestore";
import { db } from '../../firebase/firebase.config';

const Main = () => {
    const [data, setData] = useState([]);
    const [selectedPerson, setSelectedPerson] = useState(0);

    // fetch all data from firebase
    useEffect(() => {
        const fetchData = async () => {
            let list = [];
            try {
                const querySnapshot = await getDocs(collection(db, "personcollection"));
                querySnapshot.forEach((doc) => {
                    list.push({ id: doc.id, ...doc.data() });
                });
                setData(list);
                //console.log(list);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
        //console.log("data:",data);

    }, []);

    // get selected person
    const handleSelectedPerson = (selectedP) => {
        //console.log(selectedP);
        setSelectedPerson(selectedP);
    }

    return (
        <div>
            <div className=''>
                <Navbar
                    data={data}
                ></Navbar>

                <div className="grid lg:grid-cols-3 grid-cols-1 h-[92vh]">
                    <div className='lg:col-span-2 w-full'>
                        <UserDetails
                            selectedPerson={selectedPerson}
                        ></UserDetails>
                    </div>
                    <div className='w-full lg:mt-0 mt-8 mx-auto'>
                        <UserList
                            handleSelectedPerson={handleSelectedPerson}
                        ></UserList>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Main;
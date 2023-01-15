import React from 'react';

const ListCard = ({person, handleSelectedPerson}) => {
    const {Name, Location, ID, Date, Time} = person;
    // console.log(Name, Location, ID, Date, Time);
    return (
        <div onClick={() => handleSelectedPerson(person)} className='bg-zinc-200 p-1 hover:bg-zinc-500 hover:text-white'>
            <div className="flex justify-between">
                <div className="flex flex-col justify-between font-medium text-start pl-1">
                    <p>{ID}: {Location}</p>
                    <p className='mt-3'>Person Detected</p>
                </div>

                <div className="flex justify-center font-medium text-xs text-end pr-1">
                    <p>{Date}</p>
                    <p className='ml-2'>{Time}</p>
                </div>

            </div>
        </div>
    );
};

export default ListCard;
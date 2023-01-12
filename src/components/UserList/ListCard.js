import React from 'react';

const ListCard = () => {
    return (
        <div className='bg-slate-200 p-1'>
            <div className="flex justify-between">
                <div className="flex flex-col justify-between font-medium text-start pl-1">
                    <p>EVT0024: Chennai</p>
                    <p className='mt-3'>Person Detected</p>
                </div>

                <div className="flex justify-center font-medium text-xs text-end pr-1">
                    <p>5-Jan-23</p>
                    <p className='ml-2'>11:14:13</p>
                </div>

            </div>
        </div>
    );
};

export default ListCard;
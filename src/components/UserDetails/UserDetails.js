import { IoMdMenu } from "react-icons/io";
import { RiLogoutBoxRLine } from "react-icons/ri";
// import person from '../../Images/Female25.jpg';

const UserDetails = ({ selectedPerson }) => {
    const { ID, Name, Location, Date, Time, Img, Gender } = selectedPerson;

    return (
        <div>
            <div className='flex lg:flex-row sm:flex-col flex-col min-h-[92vh] w-full lg:pr-14 sm:pr-0 pr-0'>
                {/* left blue bar */}
                <div className='bg-sky-400 lg:w-[75px] lg:p-0 p-2 sm:w-full w-full flex lg:flex-col justify-between'>
                    <IoMdMenu className='text-4xl lg:mx-auto lg:mt-1 text-white'></IoMdMenu>
                    <RiLogoutBoxRLine className='text-3xl lg:mx-auto lg:mb-10 text-white'></RiLogoutBoxRLine>
                </div>
                <div className='flex lg:flex-row sm:flex-col-reverse flex-col-reverse lg:pl-7 w-full'>
                    {/* person info */}
                    <div className="flex flex-col text-start lg:pt-7 px-5 lg:w-1/2 w-full">
                        <div className='mt-10'>
                            <p className='text-3xl font-bold'>{ID}</p>
                            <p className='text-2xl font-bold'>Person Detected</p>
                        </div>
                        <div className='grid grid-cols-2 mt-6 text-xl font-semibold lg:w-3/4'>
                            <div>
                                <p>Name</p>
                            </div>
                            <div>
                                <p>: {Name}</p>
                            </div>
                            <div>
                                <p>Location</p>
                            </div>
                            <div>
                                <p>: {Location}</p>
                            </div>
                            <div>
                                <p>Date</p>
                            </div>
                            <div>
                                <p>: {Date}</p>
                            </div>
                            <div>
                                <p>Time</p>
                            </div>
                            <div>
                                <p>: {Time}</p>
                            </div>

                        </div>
                        <div className='mt-6 text-xl font-semibold'>
                            <p>Description:</p>
                            <p className='lg:w-[57%] w-[72%]'>{Name} detected at {Location} on {Date}.</p>
                        </div>
                    </div>
                    {/* person photo */}
                    <div className="pt-2 lg:w-1/2 w-full">
                        <p className='text-2xl font-bold lg:text-start text-center pb-2'>{Gender}</p>
                        <img src={Img} alt="person" className='lg:w-[85%] w-[95%] mx-auto lg:mx-0' />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default UserDetails;
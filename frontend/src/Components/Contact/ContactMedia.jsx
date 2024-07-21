import React from 'react';
import { Typography } from '@material-tailwind/react';
import { IoIosArrowForward } from 'react-icons/io'

const ContactMedia = ({toggleShowMedia}) => {
    return (
        <div className='h-full'>
            {/* Title and switch button */}
            <div className="flex items-center justify-between">
                <Typography variant="h5" color="blue-gray">Media</Typography>
                <IoIosArrowForward onClick={toggleShowMedia} className='text-[20px] cursor-pointer' />
            </div>
            {/* View media cards */}
            <div className='grid grid-cols-2 gap-1 max-h-[36.3rem] overflow-auto mt-[10px]'>
                <div className='w-[125px] h-[125px]'>
                    <img
                        className="h-full w-full object-cover object-center"
                        src="https://images.unsplash.com/photo-1682407186023-12c70a4a35e0?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2832&q=80"
                        alt=""
                    />
                </div>
                <div className='w-[125px] h-[125px]'>
                    <img
                        className="h-full w-full object-cover object-center"
                        src="https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80"
                        alt=""
                    />
                </div>
                <div className='w-[125px] h-[125px]'>
                    <img
                        className="h-full w-full object-cover object-center"
                        src="https://docs.material-tailwind.com/img/team-3.jpg"
                        alt=""
                    />
                </div>
                <div className='w-[125px] h-[125px]'>
                    <img
                        className="h-full w-full object-cover object-center"
                        src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1471&q=80"
                        alt=""
                    />
                </div>
            </div>
        </div>
    );
}

export default ContactMedia;

import { Avatar, Typography } from '@material-tailwind/react';
import React from 'react';
import { IoIosArrowForward } from 'react-icons/io';

const ContactGroups = ({toggleShowGroups}) => {
    // Array groups
    const groups = [
        {
            img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80",
            groupName: 'groups name'
        },
        {
            img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80",
            groupName: 'groups name'
        },
        {
            img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80",
            groupName: 'groups name'
        },
        {
            img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80",
            groupName: 'groups name'
        },
        {
            img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80",
            groupName: 'groups name'
        },
        {
            img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80",
            groupName: 'groups name'
        },
        {
            img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80",
            groupName: 'groups name'
        },
        {
            img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80",
            groupName: 'groups name'
        },
        {
            img: "https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80",
            groupName: 'groups name'
        },
    ]

    return (
        <div className='h-full'>
            {/* Title and switch button */}
            <div className="flex items-center justify-between">
                <Typography variant="h5" color="blue-gray">Links</Typography>
                <IoIosArrowForward onClick={toggleShowGroups} className='text-[20px] cursor-pointer' />
            </div>
            {/* View groups cards */}
            <div className='flex flex-col gap-[20px] max-h-[90vh] overflow-auto mt-[10px] p-[10px]'>
                {
                    groups.map((item, index) => (
                        <div key={index} className='flex gap-3 items-center border-[1px] border-solid border-bgSoftGray rounded-[10px] p-[5px] shadow-custom'>
                            <Avatar
                                src={item.img}
                                alt="profile picture"
                                className='w-[50px] h-[50px]'
                            />
                            <Typography>{item.groupName}</Typography>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default ContactGroups;

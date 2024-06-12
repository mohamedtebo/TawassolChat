import React from 'react';
import { Avatar, IconButton } from '@material-tailwind/react';
import { CiVideoOn, CiPhone, CiMenuKebab } from "react-icons/ci";
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';

const ChatHeader = ({openDrawerRight}) => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1)
    }

    return (
        <div className="chat-header
            flex
            justify-between
            items-center
            p-[10px]
            border-b-[2px]
            border-bgSoftGray
            border-solid
            rounded-b-[20px]"
        >
            <div className='flex gap-3 items-center'>
                <IconButton variant="text" className='text-[20px] rounded-full' onClick={handleGoBack}>
                    <IoIosArrowBack />
                </IconButton>
                <Avatar
                    src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                    alt="profile picture"
                    className='sm-max:w-10 sm-max:h-10 cursor-pointer'
                    onClick={openDrawerRight}
                />
                <div className='flex flex-col items-center'>
                    <h1 className='text-textBlack
                        sm-max:text-[13px]
                        text-[15px]
                        font-bold'
                    >
                        User2
                    </h1>
                    <p className='text-textNeutralGray sm-max:text-[10px] text-[12px]'>
                        Online
                    </p>
                </div>
            </div>
            <div className='flex sm-max:gap-2 gap-3 sm-max:text-[27px] text-[33px] text-textBlack'>
                <CiVideoOn className='hover:bg-bgSoftGray sm-max:p-[5px] p-[7px] rounded-full' />
                <CiPhone className='hover:bg-bgSoftGray sm-max:p-[5px] p-[7px] rounded-full' />
                <CiMenuKebab className='hover:bg-bgSoftGray sm-max:p-[5px] p-[7px] rounded-full' />
            </div>
        </div>
    );
}

export default ChatHeader;

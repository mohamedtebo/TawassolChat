import React from 'react';
import { Avatar, Badge } from '@material-tailwind/react';
import { BsCheckAll } from "react-icons/bs";
import { IoIosArrowDown } from "react-icons/io";
import { Link } from 'react-router-dom';

const MsgChat = ({link}) => {
    return (
        <Link to={link}>
            <div className={`chat-user flex gap-[20px] items-center my-[10px] p-3 rounded-[20px]
            ${
                "hover:bg-bgSoftGray"
            }`}>
                <div className='imgUser relative'>
                    <Badge overlap="circular" placement="bottom-end" className='bg-[#86efac] badge'>
                        <Avatar
                            src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                            alt="profile picture"
                        />
                    </Badge>
                </div>
                <div className="chat-user-info w-full">
                    <div className='nameUser flex justify-between'>
                        <h3 className={`${
                            'text-textBlack'
                        }
                        font-bold`}>Williams</h3>
                        <p className='text-textNeutralGray text-[12px]'>7:40 PM</p>
                    </div>
                    <div className='chat-user-status flex justify-between'>
                        <p className="text-[13px] text-textNeutralGray">Hi my pro</p>
                        <div className='flex gap-3'>
                            <BsCheckAll className='text-[#86efac] text-[18px]' />
                            {/* <BsCheck className='text-textNeutralGray text-[18px]' /> */}

                            <IoIosArrowDown className='text-textNeutralGray showIcon' />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
}

export default MsgChat;

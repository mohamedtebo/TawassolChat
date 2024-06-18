import React from 'react';
import { Avatar } from '@material-tailwind/react';
import { GoArrowDownLeft, GoArrowUpRight } from "react-icons/go";
import { CiVideoOn, CiPhone } from "react-icons/ci";

const CallCard = ({name, time, image, status, incoming, type, selectedTheme}) => {
    return (
        <div className="chat-user flex gap-[20px] items-center my-[10px] p-3 rounded-[20px]">
            <div className='imgUser relative'>
                <Avatar
                    src={image}
                    alt="profile picture"
                />
            </div>

            <div className="chat-user-info w-full flex justify-between items-center">
                <div className='nameUser '>
                    <h3 className={`${
                        selectedTheme === 'Light'
                            ? 'text-textBlack '
                        : selectedTheme === 'System Default' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'text-textWhaite' : 'text-textBlack ') : 'text-textWhaite'
                    }
                    font-bold`}>{name}</h3>
                    <div className='flex gap-3 items-center'>
                        {incoming ? 
                            <GoArrowDownLeft className={`
                                ${status ? 'text-green-300' : 'text-red-300'}
                                text-[12px]
                            `} />
                        :
                            <GoArrowUpRight className={`
                                ${status ? 'text-green-300' : 'text-red-300'}
                                text-[12px]
                            `} />
                        }
                        <p className='text-textNeutralGray text-[12px]'>{time}</p>
                    </div>
                </div>
                <div className='chat-user-status text-green-300 cursor-pointer'>
                    {type === 'voice' && (<CiPhone />)}
                    {type === 'vedio' && (<CiVideoOn />)}
                </div>
            </div>
        </div>
    );
}

export default CallCard;

import { Avatar, Badge } from '@material-tailwind/react';
import React from 'react';
import { CiPhone, CiVideoOn } from 'react-icons/ci';

const CallCardModal = ({item}) => {
    return (
        <div className="chat-user flex gap-[20px] items-center rounded-[20px]">
            <div className='imgUserCall'>
                <Badge
                    overlap="circular"
                    placement="bottom-end"
                    className={`${item.online ? 'block' : 'hidden'}
                    bg-[#86efac]`}
                >
                    <Avatar
                        src={item.image}
                        alt="profile picture"
                        className='w-[45px] h-[40px]'
                    />
                </Badge>
            </div>

            <div className="chat-user-info w-full flex justify-between items-center">
                <div className='nameUser '>
                    <h3 className='text-textBlack font-bold'>{item.name}</h3>
                </div>
                <div className='chat-user-status text-green-300 flex gap-3'>
                    <CiPhone className='cursor-pointer' />
                    <CiVideoOn className='cursor-pointer' />
                </div>
            </div>
        </div>
    );
}

export default CallCardModal;

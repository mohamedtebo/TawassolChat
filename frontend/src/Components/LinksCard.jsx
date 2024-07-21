import React from 'react';
import { AiOutlineLink } from "react-icons/ai";
import { Typography } from '@material-tailwind/react';

const LinksCard = ({LinkItem}) => {
    return (
        <a href={LinkItem.url} className='w-full p-[6px] rounded-[10px] shadow-custom bg-[#aaa9a912] flex gap-3'>
            <div className='p-3 rounded-[10px] bg-[#D9D9D9]'>
                <AiOutlineLink />
            </div>
            <div className='w-full pt-[3px]'>
                <Typography className='underline-offset-1 text-[13px] text-textBlack'>{LinkItem.url}</Typography>
                <Typography className='text-[13px] text-primary'>{LinkItem.text}</Typography>
            </div>
        </a>
    );
}

export default LinksCard;

import React from 'react';
import { Typography } from '@material-tailwind/react';
import { LiaDownloadSolid } from 'react-icons/lia';

const DocsCard = ({docItem}) => {
    return (
        <div className='w-full h-[218px] p-[6px] rounded-[10px] shadow-custom bg-[#aaa9a912]'>
            <div className='w-full h-[153px] rounded-[10px] bg-[#D9D9D9]'></div>
            <div className='flex justify-between items-center gap-3 w-full pt-[3px]'>
                <div className='docType flex gap-3 items-center'>
                    <div className='w-[35px]'>
                        <img src={docItem.img} alt='pdf' className='w-full' />
                    </div>
                    <Typography>{docItem.name}</Typography>
                </div>
                <LiaDownloadSolid className='text-[20px] cursor-pointer' />
            </div>
        </div>
    );
}

export default DocsCard;

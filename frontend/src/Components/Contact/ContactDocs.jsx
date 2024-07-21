import React from 'react';
import { Typography } from '@material-tailwind/react';
import { IoIosArrowForward } from 'react-icons/io'
import DocsCard from '../DocsCard';
import pdf from '../../assets/pdf.png'
import image from '../../assets/image.png'
import exel from '../../assets/exel.png'

const ContactDocs = ({toggleShowDocs}) => {
    // Array docs
    let docs = [
        {
            img: pdf,
            name: 'pdf document'
        },
        {
            img: image,
            name: 'image document'
        },
        {
            img: exel,
            name: 'exel document'
        }
    ]

    return (
        <div className='h-full'>
            {/* Title and switch button */}
            <div className="flex items-center justify-between">
                <Typography variant="h5" color="blue-gray">Docs</Typography>
                <IoIosArrowForward onClick={toggleShowDocs} className='text-[20px] cursor-pointer' />
            </div>
            {/* View docs cards */}
            <div className='flex flex-col gap-[20px] max-h-[90vh] overflow-auto mt-[10px] p-[10px]'>
                {
                    docs.map((item, index) => (
                        <DocsCard key={index} docItem={item} />
                    ))
                }
            </div>
        </div>
    );
}

export default ContactDocs;

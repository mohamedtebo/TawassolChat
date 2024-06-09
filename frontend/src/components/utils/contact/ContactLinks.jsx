import { Typography } from '@material-tailwind/react'
import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import LinksCard from '../../LinksCard'

const ContactLinks = ({toggleShowLinks}) => {
    // Array links
    const links = [
        {
            text: 'codingmonk.in',
            url: 'https://codingmonk.in/blogs'
        },
        {
            text: 'codingmonk.in',
            url: 'https://codingmonk.in/blogs'
        },
        {
            text: 'codingmonk.in',
            url: 'https://codingmonk.in/blogs'
        },
        {
            text: 'codingmonk.in',
            url: 'https://codingmonk.in/blogs'
        },
        {
            text: 'codingmonk.in',
            url: 'https://codingmonk.in/blogs'
        },
        {
            text: 'codingmonk.in',
            url: 'https://codingmonk.in/blogs'
        },
        {
            text: 'codingmonk.in',
            url: 'https://codingmonk.in/blogs'
        },
        {
            text: 'codingmonk.in',
            url: 'https://codingmonk.in/blogs'
        },
        {
            text: 'codingmonk.in',
            url: 'https://codingmonk.in/blogs'
        },
    ]
    
    return (
        <div className='h-full'>
            {/* Title and switch button */}
            <div className="flex items-center justify-between">
                <Typography variant="h5" color="blue-gray">Links</Typography>
                <IoIosArrowForward onClick={toggleShowLinks} className='text-[20px] cursor-pointer' />
            </div>
            {/* View links cards */}
            <div className='flex flex-col gap-[20px] max-h-[90vh] overflow-auto mt-[10px] p-[10px]'>
                {
                    links.map((item, index) => (
                        <LinksCard key={index} LinkItem={item} />
                    ))
                }
            </div>
        </div>
    )
}

export default ContactLinks
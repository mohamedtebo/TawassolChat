import React from 'react';
import { IoIosArrowForward } from 'react-icons/io'
import { Typography } from '@material-tailwind/react'
import { VscKebabVertical } from "react-icons/vsc";
import { Menu } from '@headlessui/react'

const ContactStaredMsg = ({toggleStaredMsg}) => {
    // Array messages
    const messages = [
        { sender: 'You', content: 'Hello there!', time: '7:40 PM' },
        { sender: 'User2', content: 'Hi! How are you?', time: '7:40 PM' },
        { sender: 'You', content: 'I,m doing well, thanks. How about you?', time: '7:40 PM' },
        { sender: 'User2', content: 'Great! I,m doing well too.', time: '7:40 PM' },
        { sender: 'You', content: 'I,m doing well, thanks. How about you?', time: '7:40 PM' },
        { sender: 'User2', content: 'Great! I,m doing well too.', time: '7:40 PM' },
        { sender: 'You', content: 'I,m doing well, thanks. How about you?', time: '7:40 PM' },
        { sender: 'User2', content: 'Great! I,m doing well too.', time: '7:40 PM' },
        { sender: 'You', content: 'I,m doing well, thanks. How about you?', time: '7:40 PM' },
        { sender: 'User2', content: 'Great! I,m doing well too.', time: '7:40 PM' },
        { sender: 'You', content: 'I,m doing well, thanks. How about you?', time: '7:40 PM' },
        { sender: 'User2', content: 'Great! I,m doing well too.', time: '7:40 PM' },
        { sender: 'You', content: 'I,m doing well, thanks. How about you?', time: '7:40 PM' },
        { sender: 'User2', content: 'Great! I,m doing well too.', time: '7:40 PM' },
        { sender: 'You', content: 'I,m doing well, thanks. How about you?', time: '7:40 PM' },
        { sender: 'User2', content: 'Great! I,m doing well too.', time: '7:40 PM' },
        { sender: 'You', content: 'I,m doing well, thanks. How about you?', time: '7:40 PM' },
        { sender: 'User2', content: 'Great! I,m doing well too.', time: '7:40 PM' },
        { sender: 'You', content: 'I,m doing well, thanks. How about you?', time: '7:40 PM' },
        { sender: 'User2', content: 'Great! I,m doing well too.', time: '7:40 PM' },
    ]
    
    // Array msgOptions
    const msgOptions = [
        {
            nameOption: 'Reply',
        },
        {
            nameOption: 'React to message',
        },
        {
            nameOption: 'Forward message',
        },
        {
            nameOption: 'Star message',
        },
        {
            nameOption: 'Report',
        },
        {
            nameOption: 'Datale message',
        },
    ]
    
    return (
        <div className='h-full'>
            {/* Title and switch button */}
            <div className="flex items-center justify-between">
                <Typography variant="h5" color="blue-gray">Starred message</Typography>
                <IoIosArrowForward onClick={toggleStaredMsg} className='text-[20px] cursor-pointer' />
            </div>
            {/* View messages cards */}
            <div className="message-area
                relative
                h-[90vh]
                overflow-auto
                mt-[10px]
                flex
                flex-col"
            >
                {messages.reverse().map((message, index) => (
                    <div key={index} className={`
                        message ${
                            message.sender === 'User2' ?
                            'self-end'
                            : 'self-start'
                            }
                        relative w-auto max-w-[300px] p-[10px]`}
                    >
                        <p className="message-sender
                            hidden
                            absolute
                            left-6
                            -top-[6px]
                            text-[10px]
                            text-textNeutralGray"
                        >{message.sender}</p>
                        <p className="message-time
                            absolute
                            right-6
                            -top-[6px]
                            text-[10px]
                            text-textNeutralGray"
                        >{message.time}</p>
                        
                        <div className="absolute -left-[5px] top-[25px]">
                            <Menu as="div" className="relative inline-block text-left">
                                <Menu.Button>
                                    <VscKebabVertical />
                                </Menu.Button>

                                <Menu.Items onClick={() => console.log(index)} className='absolute left-[15px] w-[130px] z-[999] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none overflow-y-auto flex-grow MenuItems'>
                                    {msgOptions.map((item, index) => (
                                        <Menu.Item key={index}>
                                            {({ active }) => (
                                                <button
                                                    className={`${
                                                        active ? 'bg-gray-100' : ''
                                                    } flex rounded-md items-center justify-center w-full px-2 py-2 text-sm text-gray-700`}
                                                    onClick={() => console.log(`${item.nameOption} clicked`)}
                                                >
                                                    {item.nameOption}
                                                </button>
                                            )}
                                        </Menu.Item>
                                    ))}
                                </Menu.Items>
                            </Menu>
                        </div>

                        <h1 className={`message-content p-[10px] rounded-[20px] ${
                            message.sender === 'User2' ?
                                'bg-bgSoftGray text-textBlack'
                                : 'bg-primary text-textWhaite'
                            }`}>{message.content}</h1>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ContactStaredMsg;

import React, { useLayoutEffect, useRef } from 'react'
import { VscKebabVertical } from "react-icons/vsc";
import { Menu } from '@headlessui/react'

const MessageArea = ({messages}) => {
    const messageAreaRef = useRef(null);

    // This effect ensures scrolling to the bottom of messages when content changes
    useLayoutEffect(() => {
        messageAreaRef.current.scrollTop = messageAreaRef.current.scrollHeight;
    }, [messages]);

    // List of available options for each message
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
        <div ref={messageAreaRef} className="message-area
            relative
            h-[456px]
            overflow-auto
            p-[15px]
            flex
            flex-col"
        >
            {messages.map((message, index) => (
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
                    
                    <div className="absolute -right-[10px] top-[25px]">
                        <Menu as="div" className="relative inline-block text-left">
                            <Menu.Button>
                                <VscKebabVertical />
                            </Menu.Button>

                            <Menu.Items onClick={() => console.log(index)} className='absolute right-[15px] w-[130px] z-[999] rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none overflow-y-auto flex-grow MenuItems'>
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
    );
}

export default MessageArea;

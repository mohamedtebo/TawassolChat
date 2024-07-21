import React, { useState } from 'react';
import ChatHeader from '../../Components/Chats/ChatHeader';
import MessageArea from '../../Components/Chats/MessageArea';
import ChatFooter from '../../Components/Chats/ChatFooter';
import Contact from '../../Components/Contact/Contact';

const PrivateGroupPage = () => {
    // add messages data
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

    // Add state open contact dialog
    const [openRight, setOpenRight] = useState(false);

    // Add funcation for open & close contact dialog
    const openDrawerRight = () => setOpenRight(true);
    const closeDrawerRight = () => setOpenRight(false);

    return (
        <div className={`chat-container w-full h-full max-h-[100vh]
            ${
                'bg-bgWhaite'
            }`}
        >
            <div className='m-[20px]
                rounded-[20px]
                border-[2px]
                border-bgSoftGray
                border-solid'
            >
                {/* chat header section */}
                <ChatHeader openDrawerRight={openDrawerRight} />

                {/* messages area section */}
                <MessageArea messages={messages} />

                {/* chat footer section */}
                <ChatFooter />
            </div>
            <Contact
                openRight={openRight}
                closeDrawerRight={closeDrawerRight}
            />
        </div>
    );
}

export default PrivateGroupPage;

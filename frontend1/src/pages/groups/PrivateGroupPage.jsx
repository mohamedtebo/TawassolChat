import React, { useState } from 'react';
import ChatHeader from '../../components/chats/ChatHeader';
import MessageArea from '../../components/chats/MessageArea';
import ChatFooter from '../../components/chats/ChatFooter';
import Contact from '../../components/contact/Contact';
import { useSelector } from 'react-redux';

const PrivateGroupPage = () => {
    const {selectedTheme} = useSelector(state => state.theme);
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
        <div className={`chat-container w-full
            ${
                selectedTheme === 'Light'
                    ? 'bg-bgWhaite'
                : selectedTheme === 'System Default' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'bg-bgblack' : 'bg-bgWhaite') : 'bg-bgblack'
            }`}
        >
            <div className='m-[20px]
                rounded-[20px]
                border-[2px]
                border-bgSoftGray
                border-solid'
            >
                {/* chat header section */}
                <ChatHeader openDrawerRight={openDrawerRight} selectedTheme={selectedTheme} />

                {/* messages area section */}
                <MessageArea messages={messages} selectedTheme={selectedTheme} />

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

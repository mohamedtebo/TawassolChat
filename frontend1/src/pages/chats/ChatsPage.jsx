import React from 'react';
import TiltePage from '../../components/utils/TiltePage';
import SearchPage from '../../components/utils/SearchPage';
import MsgChat from '../../components/MsgChat';
import pen from '../../assets/pen.png';
import { HiOutlinePlus } from "react-icons/hi";

const ChatsPage = () => {
    return (
        <div className='bg-bgWhaite pt-4 px-6 h-full max-h-[100vh] w-full overflow-auto'>
            <TiltePage name="Chats" icon={pen} />

            <div className="chat-app">
                <SearchPage />

                <div className="chat-main static">
                    <div className="chat-sidebar  mt-[20px]">
                        <p className='text-[13px] text-textNeutralGray'>Pinned</p>

                        <MsgChat link='/chat/:id' />
                        <MsgChat link='/chat/:id' />
                        <MsgChat link='/chat/:id' />
                    </div>

                    <div className="chat-content mt-[20px]">
                        <p className='text-[13px] text-textNeutralGray'>All Chats</p>
                        
                        <MsgChat link='/chat/:id' />
                        <MsgChat link='/chat/:id' />
                        <MsgChat link='/chat/:id' />
                        <MsgChat  link='/chat/:id'/>
                    </div>

                    <div className="chat-footer
                        absolute
                        bottom-[30px]
                        right-[70px]
                        text-[20px]
                        bg-primary
                        text-textWhaite
                        p-[10px]
                        rounded-full
                        drop-shadow-shadow
                        cursor-pointer"
                    >
                        <HiOutlinePlus />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ChatsPage;

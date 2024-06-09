import React from 'react'
import pen from '../assets/pen.png'
import TiltePage from '../components/utils/TiltePage'
import SearchPage from '../components/utils/SearchPage'
import MsgChat from '../components/MsgChat'
import { HiOutlinePlus } from 'react-icons/hi'

const Groups = ({handleOpen}) => {
    return (
        <div className='bg-bgWhaite pt-4 px-6 h-full max-h-[100vh] w-full overflow-auto'>
            <TiltePage name="Groups" icon={pen} />

            <div className="chat-app">
                <SearchPage />
                <div className="chat-main static">
                    <div className="chat-sidebar  mt-[20px]">
                        <p className='text-[13px] text-textNeutralGray'>Pinned</p>

                        <MsgChat link='/group/:id' />
                        <MsgChat link='/group/:id' />
                        <MsgChat link='/group/:id' />
                    </div>
                    <div className="chat-content mt-[20px]">
                        <p className='text-[13px] text-textNeutralGray'>All Groups</p>
                        
                        <MsgChat link='/group/:id' />
                        <MsgChat link='/group/:id' />
                        <MsgChat link='/group/:id' />
                        <MsgChat link='/group/:id' />
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
                        onClick={handleOpen}
                    >
                        <HiOutlinePlus />
                    </div>
                </div>
            </div>

            {/* {openCreate && <CreateGroup open={openCreate} handleClose={handleOpenCreate} />} */}
            
        </div>
    )
}

export default Groups
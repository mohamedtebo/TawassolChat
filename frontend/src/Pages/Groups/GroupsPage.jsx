import React from 'react';
import TiltePage from '../../Components/Utils/TiltePage';
import SearchPage from '../../Components/Utils/SearchPage';
import MsgChat from '../../Components/MsgChat';
import { HiOutlinePlus } from 'react-icons/hi';
import { IoIosArrowBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@material-tailwind/react';

const GroupsPage = ({handleOpen}) => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1)
    }

    return (
        <div className={`${
            'bg-bgWhaite'
        }
        pt-4 px-6 h-full max-h-[100vh] w-full overflow-auto`}>
            <div className="flex gap-[30px] items-center">
                <IconButton
                    variant="text"
                    className={`
                        ${
                            'text-textBlack '
                        }
                        text-[20px]
                    `}
                    onClick={handleGoBack}
                >
                    <IoIosArrowBack />
                </IconButton>
                <TiltePage name="Groups" />
            </div>

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
        </div>
    );
}

export default GroupsPage;

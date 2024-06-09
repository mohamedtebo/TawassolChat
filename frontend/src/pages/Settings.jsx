import React from 'react';
import { IconButton, Typography } from '@material-tailwind/react';
import { IoMdNotificationsOutline } from 'react-icons/io';
import { IoIosArrowBack } from "react-icons/io";
import { IoImageOutline } from 'react-icons/io5';
import { MdOutlinePrivacyTip } from "react-icons/md";
import { HiOutlineKey } from "react-icons/hi";
import { PiPencilCircle } from "react-icons/pi";
import { AiOutlineQuestionCircle } from "react-icons/ai";
import { MdOutlineKeyboard } from "react-icons/md";
import { MdOutlineInfo } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const Settings = ({handleOpenTheme, handleOpenShortcuts}) => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1)
    }

    let settingList = [
        {
            icon: <IoMdNotificationsOutline className='text-[20px]' />,
            name: 'Notification',
            onClick: () => {}
        },
        {
            icon: <MdOutlinePrivacyTip className='text-[20px]' />,
            name: 'Privacy',
            onClick: () => {}
        },
        {
            icon: <HiOutlineKey className='text-[20px]' />,
            name: 'Security',
            onClick: () => {}
        },
        {
            icon: <PiPencilCircle className='text-[20px]' />,
            name: 'Theme',
            onClick: handleOpenTheme
        },
        {
            icon: <IoImageOutline className='text-[20px]' />,
            name: 'Chat wallpaper',
            onClick: () => {}
        },
        {
            icon: <AiOutlineQuestionCircle className='text-[20px]' />,
            name: 'Request account info',
            onClick: () => {}
        },
        {
            icon: <MdOutlineKeyboard className='text-[20px]' />,
            name: 'Keyboard shortcuts',
            onClick: handleOpenShortcuts
        },
        {
            icon: <MdOutlineInfo className='text-[20px]' />,
            name: 'Help',
            onClick: () => {}
        },
    ]

    return (
        <div className='ContactInfo w-full bg-bgWhaite py-4 px-6 flex flex-col gap-[50px]'>
            {/* Title and switch button */}
            <div className="flex gap-[30px] items-center text-textBlack">
                <IconButton variant="text" className='text-[20px]' onClick={handleGoBack}>
                    <IoIosArrowBack />
                </IconButton>
                <Typography className='text-[20px] font-bold'>Settings</Typography>
            </div>
            {/* Notification information */}
            <div>
                {
                    settingList.map((item, index) => (
                        <div
                            key={index}
                            onClick={item.onClick}
                            className="info container mx-auto py-[10px] cursor-pointer groupsInfo"
                        >
                            <div className='flex items-center'>
                                <p className="text-textBlack font-bold flex gap-2 items-center">
                                    {item.icon}
                                    <span className='text-[15px]'>{item.name}</span>
                                </p>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Settings;

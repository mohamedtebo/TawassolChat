import React, { useState } from 'react'
import {
    Typography,
    Avatar,
    Switch,
} from "@material-tailwind/react";
import { FaRegStar } from "react-icons/fa";
import { PiUsersThree } from 'react-icons/pi';
import { MdOutlineClose } from "react-icons/md";
import { CiPhone, CiVideoOn } from 'react-icons/ci';
import { TbUserSquareRounded } from "react-icons/tb";
import { IoMdNotificationsOutline, IoIosArrowForward } from "react-icons/io";
import { IoImageOutline, IoDocumentOutline, IoLinkOutline } from "react-icons/io5";

const ContactInfo = ({closeDrawerRight, toggleShowMedia, toggleShowDocs, toggleShowLinks, toggleStaredMsg, toggleShowGroups, toggleShowBlock, toggleShowDelete}) => {
    // Toggle state for notifications
    const [notificationEnabled, setNotificationEnabled] = useState(true);
    const handleChangeNotification = () => setNotificationEnabled(!notificationEnabled)

    return (
        <div className='ContactInfo'>
            {/* Title and switch button */}
            <div className="flex items-center justify-between">
                <Typography variant="h5" color="blue-gray">Contact Info</Typography>
                <MdOutlineClose onClick={closeDrawerRight} className='text-[20px] cursor-pointer' />
            </div>
            {/* Contact information */}
            <div className="info container mx-auto py-[10px] userInfo">
                <div className="flex justify-center flex-col gap-2 items-center">
                    <Avatar
                        src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=1480&amp;q=80"
                        alt="profile picture"
                        className='w-[70px] h-[70px] cursor-pointer'
                    />
                    <div className="flex flex-col gap-[1px] items-center">
                        <p className="text-textBlack font-bold">Williams</p>
                        <p className="text-textNeutralGray text-[18px]">+91 97876 56085</p>
                    </div>
                    <div className='flex sm-max:gap-2 gap-3 sm-max:text-[27px] text-[33px] text-textBlack'>
                        <CiVideoOn className='bg-bgSoftGray text-textBlack sm-max:p-[5px] p-[7px] rounded-full cursor-pointer' />
                        <CiPhone className='bg-bgSoftGray text-textBlack sm-max:p-[5px] p-[7px] rounded-full cursor-pointer' />
                    </div>
                </div>
            </div>
            {/* About information */}
            <div className="info container mx-auto py-[10px] aboutInfo">
                <div className="flex flex-col gap-[1px]">
                    <p className="text-textBlack font-bold flex gap-2 items-center">
                        <TbUserSquareRounded className='text-[20px]' />
                        <span className='text-[15px]'>About</span>
                    </p>
                    <p className="text-textNeutralGray text-[12px]">
                        Product Designer
                        <br />
                        It doesn't get easier, you just get better
                    </p>
                </div>
            </div>
            {/* Notification information */}
            <div className="info container mx-auto py-[10px] notification">
                <div className='flex justify-between items-center'>
                    <p className="text-textBlack font-bold flex gap-2 items-center">
                        <IoMdNotificationsOutline className='text-[20px]' />
                        <span className='text-[15px]'>Notification</span>
                    </p>
                    <Switch
                        id="custom-switch-component"
                        checked={notificationEnabled}
                        onChange={handleChangeNotification}
                        ripple={false}
                        className="h-full w-full checked:bg-primary"
                        containerProps={{
                            className: "w-11 h-6",
                        }}
                        circleProps={{
                            className: "before:hidden left-0.5 border-none",
                        }}
                    />
                </div>
            </div>
            {/* Media information */}
            <div className="info container mx-auto py-[10px] cursor-pointer mediaInfo" onClick={toggleShowMedia}>
                <div className='flex justify-between items-center'>
                    <p className="text-textBlack font-bold flex gap-2 items-center">
                        <IoImageOutline className='text-[20px]' />
                        <span className='text-[15px]'>Media <span className='text-textNeutralGray'>(97)</span></span>
                    </p>
                    <IoIosArrowForward />
                </div>
            </div>
            {/* Docs information */}
            <div className="info container mx-auto py-[10px] cursor-pointer docsInfo" onClick={toggleShowDocs}>
                <div className='flex justify-between items-center'>
                    <p className="text-textBlack font-bold flex gap-2 items-center">
                        <IoDocumentOutline className='text-[20px]' />
                        <span className='text-[15px]'>Docs <span className='text-textNeutralGray'>(24)</span></span>
                    </p>
                    <IoIosArrowForward />
                </div>
            </div>
            {/* Links information */}
            <div className="info container mx-auto py-[10px] cursor-pointer inksInfo" onClick={toggleShowLinks}>
                <div className='flex justify-between items-center'>
                    <p className="text-textBlack font-bold flex gap-2 items-center">
                        <IoLinkOutline className='text-[20px]' />
                        <span className='text-[15px]'>Links <span className='text-textNeutralGray'>(12)</span></span>
                    </p>
                    <IoIosArrowForward />
                </div>
            </div>
            {/* StarredMsg information */}
            <div className="info container mx-auto py-[10px] cursor-pointer starMessageInfo" onClick={toggleStaredMsg}>
                <div className='flex justify-between items-center'>
                    <p className="text-textBlack font-bold flex gap-2 items-center">
                        <FaRegStar className='text-[20px]' />
                        <span className='text-[15px]'>Starred messages</span>
                    </p>
                    <IoIosArrowForward />
                </div>
            </div>
            {/* Groups information */}
            <div className="info container mx-auto py-[10px] cursor-pointer groupsInfo" onClick={toggleShowGroups}>
                <div className='flex justify-between items-center'>
                    <p className="text-textBlack font-bold flex gap-2 items-center">
                        <PiUsersThree className='text-[20px]' />
                        <span className='text-[15px]'>Groups in common <span className='text-textNeutralGray'>(2)</span></span>
                    </p>
                    <IoIosArrowForward />
                </div>
            </div>
            {/* btn block & delete */}
            <div className="info container mx-auto py-[10px]">
                <div className='flex justify-between items-center text-red-500'>
                    <p className="font-bold text-[13px] cursor-pointer" onClick={toggleShowBlock}>Block</p>
                    <p className="font-bold text-[13px] cursor-pointer" onClick={toggleShowDelete}>Delete</p>
                </div>
            </div>
        </div>
    )
}

export default ContactInfo

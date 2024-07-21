import React from 'react';
import { IoChatbubblesOutline, IoCallOutline, IoSettingsOutline } from "react-icons/io5";
import { PiUsersThree } from "react-icons/pi";
import { IoIosPower } from "react-icons/io";
import { Link, Outlet, useLocation, useNavigate } from 'react-router-dom';
import { Avatar } from "@material-tailwind/react";
import logo from '../../assets/tawassol-logo.png';
import logoMopile from '../../assets/tawassol-logo-head.png';

const Sidebar = ({children, handleOpenLogout}) => {
    const navigate = useNavigate();
    const location = useLocation();

    let pageItems = [
        {
            icon: <IoChatbubblesOutline className='text-[20px]' />,
            name: 'Chats',
            link: '/chats'
        },
        {
            icon: <PiUsersThree className='text-[20px]' />,
            name: 'Groups',
            link: '/groups'
        },
        {
            icon: <IoCallOutline className='text-[20px]' />,
            name: 'Calls',
            link: '/calls'
        },
    ]
    
    let PersonalPages = [
        {
            icon: <Avatar src="https://docs.material-tailwind.com/img/face-2.jpg" alt="avatar" className="h-6 w-6" />,
            name: 'Profile',
            link: '/profile',
            action: () => navigate('/profile')
        },
        {
            icon: <IoSettingsOutline className="h-5 w-5" />,
            name: 'Settings',
            link: '/settings',
            action: () => navigate('/settings')
        },
        {
            icon: <IoIosPower className="h-5 w-5" />,
            name: 'Log Out',
            link: '/logOut',
            action: () => handleOpenLogout()
        },
    ]
    return (
        <div className='flex sm-max:gap-[4px] sm:gap-[6px] md:gap-[8px]'>
            <div
                className={`h-[100vh]
                w-full
                sm-max:max-w-[50px]
                sm:max-w-[10rem]
                md:max-w-[12rem]
                lg:max-w-[15rem]
                bg-bgWhaite
                flex
                flex-col
                justify-between`}
            >
                <nav>
                    <div className="sm-max:p-2 mb-2 p-4">
                        <img src={logo} alt="logo" className='sm-max:hidden sm:w-[100px] md:w-[130px] lg:w-[150px]' />
                        <img src={logoMopile} alt="logoMopile" className='sm-max:block sm:hidden w-[30px]' />
                    </div>
                    <div className='pr-0 pl-2'>
                        {
                            pageItems.map((item, index) => (
                                <Link to={item.link} key={index}>
                                    <div className={`
                                        ${
                                            location.pathname === item.link ? 
                                                'text-primary bg-bgSoftGray font-[600]'
                                            : `
                                                text-textNeutralGray
                                            bg-transparent font-normal`
                                        }
                                        hover:bg-bgSoftGray
                                        hover:text-primary
                                        hover:font-[600]
                                        text-[15px]
                                        flex
                                        gap-[10px]
                                        sm-max:px-[6px]
                                        py-[10px]
                                        px-[10px]
                                        cursor-pointer`}
                                    >
                                        {item.icon}
                                        <h1 className='sm-max:hidden'>{item.name}</h1>
                                    </div>
                                </Link>
                            ))
                        }
                    </div>
                </nav>

                <nav className='pb-4'>
                    <hr className="my-2 mx-3 sm-max:mx-[6px] border-blue-gray-50" />
                    <div className='pr-0 pl-2'>
                        {
                            PersonalPages.map((item, index) => (
                                <div onClick={item.action} key={index} className={`
                                    ${
                                        location.pathname === item.link ?
                                            'text-primary font-[600]'
                                        : `
                                            text-textNeutralGray
                                            font-normal
                                        `
                                    }
                                    hover:text-primary
                                    hover:font-[600]
                                    text-[15px]
                                    flex
                                    gap-[10px]
                                    sm-max:px-[6px]
                                    py-3
                                    px-3
                                    cursor-pointer`
                                    }
                                >
                                    {item.icon}
                                    <h1 className='sm-max:hidden'>{item.name}</h1>
                                </div>
                            ))
                        }
                    </div>
                </nav>
            </div>

            <div>{children}</div>
            <Outlet />
        </div>
    );
}

export default Sidebar;

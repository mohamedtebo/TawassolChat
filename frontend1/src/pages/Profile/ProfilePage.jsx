import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { Avatar, Button, IconButton, Typography } from '@material-tailwind/react';
import { useSelector } from 'react-redux';
import imgProfile from '../../assets/Profile.png'

const ProfilePage = () => {
    const navigate = useNavigate();
    const {selectedTheme} = useSelector(state => state.theme);

    const handleGoBack = () => {
        navigate(-1)
    }

    const handleGoEdit = () => {
        navigate('/profile/edit')
    }

    return (
        <div className={`${
                selectedTheme === 'Light'
                    ? 'bg-bgWhaite '
                : selectedTheme === 'System Default' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'bg-bgblack' : 'bg-bgWhaite ') : 'bg-bgblack'
            }
            ContactInfo w-full py-4 px-6 flex flex-col gap-[50px]`}
        >
            {/* Title and switch button */}
            <div className={`flex gap-[30px] items-center
                ${
                    selectedTheme === 'Light'
                        ? 'text-textBlack '
                    : selectedTheme === 'System Default' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'text-textWhaite' : 'text-textBlack ') : 'text-textWhaite'
                }`}
            >
                <IconButton
                    variant="text"
                    color={selectedTheme === 'Light' ? 'black' : selectedTheme === 'System Default' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'white': 'black') : 'white'}
                    className='text-[20px]'
                    onClick={handleGoBack}
                >
                    <IoIosArrowBack />
                </IconButton>
                <Typography className='text-[20px] font-bold'>Profile</Typography>
            </div>

            <div className="space-y-3 flex flex-col gap-[2px]">
                <div>
                    <Typography variant="small" className="block text-sm font-medium text-textNeutralGray ps-3">Avatar</Typography>
                    <Avatar src={imgProfile} alt="avatar" className='w-[120px] h-[120px]' />
                </div>

                <div className='flex flex-col gap-[2px]'>
                    <div className="block text-sm font-medium text-textNeutralGray ps-3">
                        Full Name
                    </div>
                    <div className={`${
                        selectedTheme === 'Light'
                            ? 'text-textBlack '
                        : selectedTheme === 'System Default' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'text-textWhaite' : 'text-textBlack ') : 'text-textWhaite'
                    } ps-3`}>Full Name</div>
                </div>

                <div className='flex flex-col gap-[2px]'>
                    <div className="block text-sm font-medium text-textNeutralGray ps-3">
                        About
                    </div>
                    <div className={`${
                        selectedTheme === 'Light'
                            ? 'text-textBlack '
                        : selectedTheme === 'System Default' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'text-textWhaite' : 'text-textBlack ') : 'text-textWhaite'
                    } ps-3`}>About</div>
                </div>
            
                <div className='flex flex-col gap-[2px]'>
                    <div className="block text-sm font-medium text-textNeutralGray ps-3">
                        Phone
                    </div>
                    <div className={`${
                        selectedTheme === 'Light'
                            ? 'text-textBlack '
                        : selectedTheme === 'System Default' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'text-textWhaite' : 'text-textBlack ') : 'text-textWhaite'
                    } ps-3`}>Phone</div>
                </div>
            
                <div className='flex flex-col gap-[2px]'>
                    <div className="block text-sm font-medium text-textNeutralGray ps-3">
                        Email
                    </div>
                    <div className={`${
                        selectedTheme === 'Light'
                            ? 'text-textBlack '
                        : selectedTheme === 'System Default' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'text-textWhaite' : 'text-textBlack ') : 'text-textWhaite'
                    } ps-3`}>Email</div>
                </div>

                <div className="flex justify-end">
                    <Button
                        variant="gradient"
                        color="purple"
                        className='p-3
                        text-[10px]
                        sm:text-[12px]
                        md:text-[14px]
                        focus:outline-none capitalize'
                        onClick={handleGoEdit}
                    >
                        <span>Edit Profile</span>
                    </Button>
                </div>
        </div>
        </div>
    );
}

export default ProfilePage;

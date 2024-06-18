import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { IconButton, Typography } from '@material-tailwind/react';
import ProfileForm from '../../components/Profile/ProfileForm'
import { useSelector } from 'react-redux';

const ProfilePage = () => {
    const navigate = useNavigate();
    const {selectedTheme} = useSelector(state => state.theme);

    const handleGoBack = () => {
        navigate(-1)
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

            <ProfileForm selectedTheme={selectedTheme} />
        </div>
    );
}

export default ProfilePage;

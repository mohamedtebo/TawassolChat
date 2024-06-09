import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowBack } from 'react-icons/io';
import { IconButton, Typography } from '@material-tailwind/react';
import ProfileForm from '../components/profile/ProfileForm';

const ProfilePage = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1)
    }

    return (
        <div className='ContactInfo w-full bg-bgWhaite py-4 px-6 flex flex-col gap-[50px]'>
            {/* Title and switch button */}
            <div className="flex gap-[30px] items-center text-textBlack">
                <IconButton variant="text" className='text-[20px]' onClick={handleGoBack}>
                    <IoIosArrowBack />
                </IconButton>
                <Typography className='text-[20px] font-bold'>Profile</Typography>
            </div>

            <ProfileForm />
        </div>
    );
}

export default ProfilePage;

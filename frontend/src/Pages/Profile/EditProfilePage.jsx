import React from 'react';
import { IconButton, Typography } from '@material-tailwind/react';
import { IoIosArrowBack } from 'react-icons/io';
import { useNavigate } from 'react-router-dom';
import ProfileForm from '../../Components/Profile/ProfileForm';

const EditProfilePage = () => {
    const navigate = useNavigate();

    const handleGoBack = () => {
        navigate(-1)
    }

    return (
        <div className={`${
                'bg-bgWhaite'
            }
            ContactInfo w-full h-full max-h-[100vh] overflow-auto py-4 px-6 flex flex-col gap-[20px]`}
        >
            {/* Title and switch button */}
            <div className={`flex gap-[30px] items-center
                ${
                    'text-textBlack '
                }`}
            >
                <IconButton
                    variant="text"
                    color={'black'}
                    className='text-[20px]'
                    onClick={handleGoBack}
                >
                    <IoIosArrowBack />
                </IconButton>
                <Typography className='text-[20px] font-bold'>Edit Profile</Typography>
            </div>

            <ProfileForm />
        </div>
    );
}

export default EditProfilePage;

import React, { useState } from 'react';
import ProfileImg from '../../assets/Profile.png';
import { Avatar, Button, Input, Textarea, Typography } from '@material-tailwind/react';

const ProfileForm = () => {
    const [name, setName] = useState('');
    const [about, setAbout] = useState('');
    const [avatar, setAvatar] = useState(ProfileImg);
    const [selectedFile, setSelectedFile] = useState(null)
    const [errors, setErrors] = useState({});

    const handleChangeName = (e) => {
        setName(e.target.value);
    }
    const handleChangeAbout = (e) => {
        setAbout(e.target.value);
    }
    const handleChangeAvatar = (e) => {
        if(e.target.files && e.target.files[0]) {
            setAvatar(URL.createObjectURL(e.target.files[0]))
            setSelectedFile(e.target.files[0])
        }
    }

    const validationValues = () => {
        const errors = {}
        if(!name) {
            errors.name = 'Name is required'
        }
        if(!about) {
            errors.about = 'About is required'
        }
        if (!selectedFile) {
            errors.avatar = "Avatar is required";
        }
        setErrors(errors)
        return Object.keys(errors).length === 0;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!validationValues()) return;

        const myForm = new FormData();
        myForm.append("name", name);
        myForm.append("about", about);
        myForm.append("avatar", selectedFile);

        const formDataObj = Object.fromEntries(myForm.entries());
        console.log(formDataObj);
    }
    return (
        <form className="space-y-3 flex flex-col gap-4" onSubmit={handleSubmit}>
            <div>
                <Typography variant="small" className="block text-sm font-medium text-textNeutralGray ps-3">Avatar</Typography>
                <label htmlFor='upload-photo' className='cursor-pointer'>
                    <Avatar src={avatar} alt="avatar" className='w-[120px] h-[120px]' />
                </label>
                <input 
                    type='file' 
                    name='avatar' 
                    id='upload-photo' 
                    className='hidden' 
                    onChange={handleChangeAvatar} 
                />
                {errors.avatar && <p className="text-red-300 text-sm">{errors.avatar}</p>}
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor="firstName" className="block text-sm font-medium text-textNeutralGray ps-3">
                    First Name
                </label>
                <Input
                    value={name}
                    onChange={handleChangeName}
                    type="text"
                    name="firstName"
                    id="firstName"
                    placeholder="Enter your firstName"
                    className={`!rounded-[20px]
                        !border
                        ${errors.name ? '!border-red-300' : '!border-bgSoftGray'}
                        text-textBlack
                        placeholder:opacity-100
                        focus:outline-none
                    !px-[24px]`}
                    labelProps={{
                        className: "hidden",
                    }}
                />
                {errors.name && <p className="text-red-300 text-sm ps-3">{errors.name}</p>}
            </div>

            <div className='flex flex-col gap-1'>
                <label htmlFor="about" className="block text-sm font-medium text-textNeutralGray ps-3">
                    About
                </label>
                <Textarea
                    value={about}
                    onChange={handleChangeAbout}
                    rows={4}
                    name="about"
                    id="about"
                    placeholder="Enter about"
                    className={`!rounded-[20px]
                        !border
                        ${errors.name ? '!border-red-300' : '!border-bgSoftGray'}
                        text-textBlack
                        placeholder:opacity-100
                        focus:outline-none
                    !px-[24px]`}
                    labelProps={{
                        className: "hidden",
                    }}
                />
                {errors.about && <p className="text-red-300 text-sm ps-3">{errors.about}</p>}
            </div>

            <div className="flex justify-end">
                <Button
                    variant="gradient"
                    color="purple"
                    className='p-3
                    text-[10px]
                    sm:text-[12px]
                    md:text-[14px]
                    focus:outline-none'
                    onClick={handleSubmit}
                >
                    <span>Save</span>
                </Button>
            </div>
        </form>
    );
}

export default ProfileForm;

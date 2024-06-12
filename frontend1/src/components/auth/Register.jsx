import React, { useState } from 'react';
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5'

const Register = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [showshowPass, setShowPass] = useState(false)

    const validateValues = () => {
        let errors = {}
        if (firstName === '') {
            errors.firstName = "Please enter your first name";
        }
        if (lastName === '') {
            errors.lastName = "Please enter your last name";
        }
        if (email === '') {
            errors.email = "Please enter your email";
        }
        if (password === '') {
            errors.password = "Please enter your password";
        }
        return errors;
    }
    
    const handleChangeFirstName = (e) => {
        setFirstName(e.target.value);
    }
    
    const handleChangeLastName = (e) => {
        setLastName(e.target.value);
    }
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
    }
    
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleShowPass = () => {
        setShowPass(!showshowPass)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateValues());
    }

    return (
        <form className="mt-8 space-y-3" onSubmit={handleSubmit}>
            <div className='flex flex-col gap-3 relative'>
                <div className="flex flex-col sm:flex-row space-y-2 sm:space-y-0 sm:space-x-2">
                    <input
                        type="text"
                        placeholder="First name"
                        name="firstName"
                        required
                        value={firstName}
                        onChange={handleChangeFirstName}
                        className={`rounded-[10px]
                            border-[1px]
                            border-solid
                            ${errors.firstName ? 'border-red-300' : 'border-gray-300'}
                            w-full
                            px-[8px]
                            py-[6px]
                            focus:outline-none
                        text-sm`}
                    />
                    <input
                        type="text"
                        placeholder="Last name"
                        name="lastName"
                        required
                        value={lastName}
                        onChange={handleChangeLastName}
                        className={`rounded-[10px]
                            border-[1px]
                            border-solid
                            ${errors.lastName ? 'border-red-300' : 'border-gray-300'}
                            w-full
                            px-[8px]
                            py-[6px]
                            focus:outline-none
                        text-sm`}
                    />
                </div>
                {errors.firstName && <p className='text-red-300 text-[13px] px-[8px]'>{errors.firstName}</p>}
                {errors.lastName && <p className='text-red-300 text-[13px] px-[8px]'>{errors.lastName}</p>}
                <div className='flex flex-col gap-[6px]'>
                    <input
                        type="email"
                        placeholder="Email"
                        name="email"
                        required
                        value={email}
                        onChange={handleChangeEmail}
                        className={`rounded-[10px]
                            border-[1px]
                            border-solid
                            ${errors.email ? 'border-red-300' : 'border-gray-300'}
                            w-full
                            px-[8px]
                            py-[6px]
                            focus:outline-none
                        text-sm`}
                    />
                    {errors.email && <p className='text-red-300 text-[13px] px-[8px]'>{errors.email}</p>}
                </div>
                <div className='flex flex-col gap-[6px] relative'>
                    <input
                        type={showshowPass? "text": "password"}
                        placeholder="Password"
                        name="password"
                        required
                        value={password}
                        onChange={handleChangePassword}
                        className={`rounded-[10px]
                            border-[1px]
                            border-solid
                            ${errors.password ? 'border-red-300' : 'border-gray-300'}
                            w-full
                            px-[8px]
                            py-[6px]
                            focus:outline-none
                        text-sm`}
                    />
                    <div
                        className={`absolute
                            right-[15px]
                            top-[10px]
                            text-textNeutralGray
                            cursor-pointer
                        ${password ? 'block' : 'hidden'}`}
                    >
                        {
                            showshowPass ? <IoEyeOffOutline onClick={handleShowPass} />
                            : <IoEyeOutline onClick={handleShowPass} />
                        }
                    </div>
                    {errors.password && <p className='text-red-300 text-[13px] px-[8px]'>{errors.password}</p>}
                </div>
            </div>

            <button
                onClick={handleSubmit}
                className="w-full py-2 px-4 text-sm font-medium rounded-md text-textWhaite bg-primary focus:outline-none"
            >
                Create Account
            </button>
        </form>
    )
}

export default Register;

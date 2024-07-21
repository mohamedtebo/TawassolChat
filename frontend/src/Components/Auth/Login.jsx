import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";

const Login = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [showshowPass, setShowPass] = useState(false)

    const validateValues = () => {
        let errors = {}
        if (email === '') {
            errors.email = "Please enter your email";
        }
        if (password === '') {
            errors.password = "Please enter your password";
        }
        return errors;
    }
    
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
        if (errors.email) {
            setErrors(prevErrors => ({ ...prevErrors, email: '' }));
        }
    }
    
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
        if (errors.password) {
            setErrors(prevErrors => ({ ...prevErrors, password: '' }));
        }
    }

    const handleShowPass = () => {
        setShowPass(!showshowPass)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateValues();
        setErrors(validationErrors);
    }

    return (
        <form className="mt-8 space-y-3" onSubmit={handleSubmit}>
            <div className='flex flex-col gap-3 relative'>
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
                <Link to='/auth/reset-password' className='text-[12px] sm:text-[14px] underline underline-offset-1 self-end'>Forgot password?</Link>
            </div>

            <button
                onClick={handleSubmit}
                className="w-full py-2 px-4 text-sm font-medium rounded-md text-textWhaite bg-primary focus:outline-none"
            >
                Login
            </button>
        </form>
    );
}

export default Login;

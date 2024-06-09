import React, { useState } from 'react'
import { IoEyeOffOutline, IoEyeOutline } from 'react-icons/io5';

const NewPassword = () => {
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [showshowPass, setShowPass] = useState(false)
    const [showConfirmPass, setShowConfirmPass] = useState(false)

    const validateValues = () => {
        let errors = {}
        if (password === '') {
            errors.password = "Please enter your password";
        }
        if (confirmPassword === '') {
            errors.confirmPassword = "Please enter your confirmPassword";
        }
        return errors;
    }
    
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
    }

    const handleShowPass = () => {
        setShowPass(!showshowPass)
    }
    const handleShowConfirmPass = () => {
        setShowConfirmPass(!showConfirmPass)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateValues());
    }

    return (
        <form className="mt-8 space-y-3" onSubmit={handleSubmit}>
            <div className='flex flex-col gap-3'>
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
                <div className='flex flex-col gap-[6px] relative'>
                    <input
                        type={showConfirmPass? "text": "password"}
                        placeholder="ConfirmPassword"
                        name="confirmPassword"
                        required
                        value={confirmPassword}
                        onChange={handleChangeConfirmPassword}
                        className={`rounded-[10px]
                            border-[1px]
                            border-solid
                            ${errors.confirmPassword ? 'border-red-300' : 'border-gray-300'}
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
                        ${confirmPassword ? 'block' : 'hidden'}`}
                    >
                        {
                            showConfirmPass ? <IoEyeOffOutline onClick={handleShowConfirmPass} />
                            : <IoEyeOutline onClick={handleShowConfirmPass} />
                        }
                    </div>
                    {errors.confirmPassword && <p className='text-red-300 text-[13px] px-[8px]'>{errors.confirmPassword}</p>}
                </div>
            </div>

            <button
                onClick={handleSubmit}
                className="w-full py-2 px-4 text-sm font-medium rounded-md text-textWhaite bg-primary focus:outline-none"
            >
                Confirm
            </button>
        </form>
    )
}

export default NewPassword
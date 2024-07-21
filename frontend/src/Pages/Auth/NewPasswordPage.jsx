import React, { useState } from 'react';
import NewPassword from '../../Components/Auth/NewPassword';
import { motion } from 'framer-motion';
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md'

const NewPasswordPage = () => {
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
        
        if (errors.confirmPassword) {
            setErrors(prevErrors => ({ ...prevErrors, confirmPassword: '' }));
        }
    }

    const handleShowPass = () => {
        setShowPass(!showshowPass)
    }
    const handleShowConfirmPass = () => {
        setShowConfirmPass(!showConfirmPass)
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const validationErrors = validateValues();
        setErrors(validationErrors);
    }

    const notResetPassword = () => {
        setTimeout(() => {
            navigate("/auth/login")
        }, 1500)
    }

    return (
        <div className='sm-max:px-[5px]'>
            <div className="mb-5 relative px-[5px]">
                <h3 className="text-[15px] sm:text-[18px] font-bold mb-2">New password</h3>
                <p className="text-textNeutralGray mb-5 text-[12px] sm:text-[14px]">
                    Please set your new password.
                </p>
            </div>

            {/* newPassword form */}
            <NewPassword
                errors={errors}
                password={password}
                handleChangePassword={handleChangePassword}
                confirmPassword={confirmPassword}
                handleChangeConfirmPassword={handleChangeConfirmPassword}
                showshowPass={showshowPass}
                handleShowPass={handleShowPass}
                showConfirmPass={showConfirmPass}
                handleShowConfirmPass={handleShowConfirmPass}
                handleSubmit={handleSubmit}
            />

            <div
                onClick={notResetPassword}
                className="mt-3 mx-auto flex gap-1 items-center cursor-pointer"
            >
                <motion.div
                    animate={{ x: [0, -15, 0], transition: { duration: 2, repeat: Infinity } }}
                    className='text-[20px] text-primary'
                >
                    <MdKeyboardDoubleArrowLeft />
                </motion.div>
                <span className='text-textNeutralGray'>Return to login</span>
            </div>
        </div>
    );
}

export default NewPasswordPage;

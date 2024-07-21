import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VerifyEmail from '../../Components/Auth/VerifyEmail';

const VerifyEmailPage = () => {
    const navigate = useNavigate();
    const [otp, setOtp] = useState('');
    const [errors, setErrors] = useState({});

    const validateValues = () => {
        let errors = {}
        if (otp === '') {
            errors.otp = "Please enter your otp";
        }
        return errors;
    }

    const handleChangeOtp = (e) => {
        setOtp(e);
        if (errors.otp) {
            setErrors(prevErrors => ({ ...prevErrors, otp: '' }));
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const validationErrors = validateValues();
        setErrors(validationErrors);
    }
    
    const sendCodeAgain = () => {
        setTimeout(() => {
            navigate("/auth/reset-password")
        }, 1500)
    }

    return (
        <div className='sm-max:px-[5px]'>
            <div className="mb-5 relative px-[5px]">
                <h4 className="text-[15px] sm:text-[18px] font-normal mb-2">Please Verify OTP</h4>
            </div>

            {/* Login form */}
            <VerifyEmail
                otp={otp}
                handleChangeOtp={handleChangeOtp}
                handleSubmit={handleSubmit}
                errors={errors}
            />

            {
                errors.otp === "Reset code is invalid or has expired" ?
                    <div className='mt-3 text-textNeutralGray cursor-pointer' onClick={sendCodeAgain}>Send code again</div>
                : null
            }
        </div>
    );
}

export default VerifyEmailPage;

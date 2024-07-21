import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import VerifyEmail from '../../Components/Auth/VerifyEmail';
import useVerifyEmail from '../../Hooks/Auth/useVerifyEmail';
import Loading from '../../Components/Utils/Loading';

const VerifyEmailPage = () => {
    const [
        otp,
        handleChangeOtp,
        handleSubmit,
        sendCodeAgain,
        status,
        errors
    ] = useVerifyEmail();

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

            {/* Loading component */}
            {
                status === 'loading' ? <Loading /> : null
            }
        </div>
    );
}

export default VerifyEmailPage;

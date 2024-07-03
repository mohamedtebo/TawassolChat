import React from 'react';
import VerifyEmail from '../../components/auth/VerifyEmail';
import Loading from '../../components/utils/Loading';
import useVerifyEmail from '../../hooks/auth/useVerifyEmail';

const VerifyEmailPage = () => {
    const [
        otp,
        handleChangeOtp,
        handleSubmit,
        sendCodeAgain,
        loading,
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

            {
                loading ? <Loading /> : null
            }
        </div>
    );
}

export default VerifyEmailPage;

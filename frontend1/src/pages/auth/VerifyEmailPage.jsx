import React from 'react';
import VerifyEmail from '../../components/auth/VerifyEmail';

const VerifyEmailPage = () => {
    return (
        <div className='sm-max:px-[5px]'>
            <div className="mb-5 relative px-[5px]">
                <h4 className="text-[15px] sm:text-[18px] font-normal mb-2">Please Verify OTP</h4>
            </div>

            {/* Login form */}
            <VerifyEmail />
        </div>
    );
}

export default VerifyEmailPage;

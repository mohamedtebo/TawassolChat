import React, { useState } from 'react';
import OtpInput from 'react-otp-input';

const VerifyEmail = () => {
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
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setErrors(validateValues());
        console.log(otp)
        // dispatch(registerUser({
        //     firstName: firstName,
        //     lastName: lastName,
        //     phone: phone,
        //     email: email,
        //     password: password
        // }));
    }

    return (
        <form className="mt-8 space-y-3" onSubmit={handleSubmit}>
            <div className='flex flex-col gap-3 relative'>
                <div className='otp-input-container'>
                    <OtpInput
                        value={otp}
                        onChange={handleChangeOtp}
                        numInputs={6}
                        placeholder='000000'
                        // renderSeparator={<span>-</span>}
                        renderInput={(props) => <input {...props} />}
                        isInputNum={true}
                        separator={<span>-</span>}
                        shouldAutoFocus={true}
                        inputStyle={`${errors.otp ? "otp-input-error" : "otp-input"}`}
                        containerStyle="otp-container"
                    />
                </div>
                {errors.otp && <p className='text-red-300 text-[13px] px-[8px] text-center'>{errors.otp}</p>}
            </div>

            <button
                onClick={handleSubmit}
                className="w-full py-2 px-4 text-sm font-medium rounded-md text-textWhaite bg-primary focus:outline-none"
            >
                Confirm
            </button>
        </form>
    );
}

export default VerifyEmail;

import React from 'react';
import useForgotpassword from '../../hooks/auth/useForgotpassword';

const ResetPassword = () => {
    const [
        email,
        handleChangeEmail,
        handleSubmit,
        errors
    ] = useForgotpassword();

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
            </div>

            <button
                onClick={handleSubmit}
                className="w-full py-2 px-4 text-sm font-medium rounded-md text-textWhaite bg-primary focus:outline-none"
            >
                Sebd request
            </button>
        </form>
    )
}

export default ResetPassword;

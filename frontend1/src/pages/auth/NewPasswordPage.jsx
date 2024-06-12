import React from 'react';
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { MdKeyboardDoubleArrowLeft } from 'react-icons/md'
import NewPassword from '../../components/auth/NewPassword'

const NewPasswordPage = () => {
    return (
        <div className='sm-max:px-[5px]'>
            <div className="mb-5 relative px-[5px]">
                <h3 className="text-[15px] sm:text-[18px] font-bold mb-2">New password</h3>
                <p className="text-textNeutralGray mb-5 text-[12px] sm:text-[14px]">
                    Please set your new password.
                </p>
            </div>

            {/* newPassword form */}
            <NewPassword />

            <Link
                to="/auth/login"
                className="mt-3 mx-auto flex gap-1 items-center"
            >
                <motion.div
                    animate={{ x: [0, -15, 0], transition: { duration: 2, repeat: Infinity } }}
                    className='text-[20px] text-primary'
                >
                    <MdKeyboardDoubleArrowLeft />
                </motion.div>
                <span className='text-textNeutralGray'>Return to login</span>
            </Link>
        </div>
    )
}

export default NewPasswordPage;

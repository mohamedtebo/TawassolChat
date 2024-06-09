import React from 'react'
import AuthSocial from '../../components/auth/AuthSocial'
import { Link } from 'react-router-dom'
import Register from '../../components/auth/Register'

const RegisterPage = () => {
    const handleGoogleRegister = () => {
        console.log('GoogleLogin')
    }

    const handleGithubRegister = () => {
        console.log('GithubLogin')
    }

    const handleTwitterRegister = () => {
        console.log('TwitterLogin')
    }

    return (
        <div className='sm-max:px-[5px]'>
            <div className="mb-5 relative px-[5px]">
                <h4 className="text-[15px] sm:text-[18px] font-bold">Get started with Tawassol.</h4>

                <div className="flex items-center space-x-1 text-[12px] sm:text-[14px]">
                    <p>Already have an account?</p>
                    <Link to="/auth/login" className="text-sm font-medium text-primary">
                        Login
                    </Link>
                </div>
            </div>

            {/* Register form */}
            <Register />


            <p className="flex gap-1 text-[12px] sm:text-[14px] text-gray-500 mt-3 text-center">
                <span>By signing up, I agree to</span>
                <span className="underline text-primary">Terms of Service</span>
                <span>and</span>
                <span className="underline text-primary">Privacy Policy</span>
            </p>


            {/* Auth social  */}
            <AuthSocial
                handleGoogle = {handleGoogleRegister}
                handleGithub = {handleGithubRegister}
                handleTwitter = {handleTwitterRegister}
            />
        </div>
    )
}

export default RegisterPage
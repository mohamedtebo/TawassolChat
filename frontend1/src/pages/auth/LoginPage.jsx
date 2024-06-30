import React from 'react';
import { Link } from 'react-router-dom';
import Login from '../../components/auth/Login';
import AuthSocial from '../../components/auth/AuthSocial';
import { useSelector } from 'react-redux';
import Loading from '../../components/utils/Loading';

const LoginPage = () => {
    const {loading} = useSelector(state => state.auth);

    const handleGoogleLogin = () => {
        console.log('GoogleLogin')
    }

    const handleGithubLogin = () => {
        console.log('GithubLogin')
    }

    const handleTwitterLogin = () => {
        console.log('TwitterLogin')
    }

    return (
        <div className='sm-max:px-[5px]'>
            <div className="mb-5 relative px-[5px]">
                <h4 className="text-[15px] sm:text-[18px] font-bold mb-2">Login</h4>
                <div className="flex items-center space-x-0.5 text-[12px] sm:text-[14px]">
                    <p className="">Don't have an account?</p>
                    <Link to="/auth/register" className=" font-bold text-primary">
                        Create an account
                    </Link>
                </div>
            </div>

            {/* Login form */}
            <Login />

            {/* Auth social  */}
            <AuthSocial
                handleGoogle = {handleGoogleLogin}
                handleGithub = {handleGithubLogin}
                handleTwitter = {handleTwitterLogin}
            />

            {/* Loading component */}
            {
                loading ? <Loading /> : null
            }
        </div>
    )
}

export default LoginPage;

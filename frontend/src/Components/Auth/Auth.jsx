import React from 'react';
import { Outlet } from 'react-router-dom';
import logo from '../../assets/tawassol-logo.png'

const Auth = () => {
    return (
        <div className='bg-bgWhaite'>
            <div className="max-w-sm mx-auto my-[50px]">
                <div className="space-y-5">
                    <div className="w-full flex flex-col items-center">
                        <img className="w-[100px] sm:w-[110px] md:w-[130px] lg:w-[150px]" src={logo} alt="Logo" />
                    </div>
                

                    <Outlet />
                </div>
            </div>
        </div>
    );
}

export default Auth;

import React from 'react'
import { IconButton } from '@material-tailwind/react';
import { RiGoogleLine } from "react-icons/ri";
import { RiGithubLine } from "react-icons/ri";
import { RiTwitterXLine } from "react-icons/ri";

const AuthSocial = ({handleGoogle, handleGithub, handleTwitter}) => {

    return (
        <div>
            <div className="my-2.5 text-[11px] w-full text-center text-gray-400">OR</div>

            <div className="flex justify-center space-x-2">
            <IconButton variant="text" className="rounded-full text-[18px]" onClick={handleGoogle}>
                <RiGoogleLine className="text-red-500" />
            </IconButton>

            <IconButton variant="text" className="rounded-full text-[18px]" onClick={handleGithub}>
                <RiGithubLine className="text-gray-800" />
            </IconButton>

            <IconButton variant="text" className="rounded-full text-[18px]" onClick={handleTwitter}>
                <RiTwitterXLine className="text-blue-500" />
            </IconButton>
            </div>
        </div>
    )
}

export default AuthSocial
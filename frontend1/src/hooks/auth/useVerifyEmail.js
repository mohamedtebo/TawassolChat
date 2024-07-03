import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { VerifyPasswordUser, sendCodeAgainUser } from "../../store/reducers/authReducer";
import { toast } from "react-toastify";

const useVerifyEmail = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user, error, loading} = useSelector(state => state.auth);
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
        if (errors.otp) {
            setErrors(prevErrors => ({ ...prevErrors, otp: '' }));
        }
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const validationErrors = validateValues();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            await dispatch(VerifyPasswordUser({
                otp: otp
            }))
        }
    }

    useEffect(() => {
        if(user) {
            if(user.message === "The reset code has been verified successfully") {
                toast.success(user.message)
                setTimeout(() => {
                    setOtp('')
                }, 500)
                setTimeout(() => {
                    navigate('/auth/new-password')
                }, 1000)
            }
        }
        if(error) {
            if(error.message === "Reset code is invalid or has expired") {
                setErrors({ otp: error.message });
            }
        }
    }, [user, error])
    
    const sendCodeAgain = () => {
        setTimeout(() => {
            dispatch(sendCodeAgainUser());
        }, 1000)

        setTimeout(() => {
            navigate("/auth/reset-password")
        }, 1500)
    }

    return [
        otp,
        handleChangeOtp,
        handleSubmit,
        sendCodeAgain,
        loading,
        errors
    ]
}

export default useVerifyEmail;

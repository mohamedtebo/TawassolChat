import { useState } from 'react';
import { toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { resetPasswordUser } from '../../Store/Actions/AuthAction';
import { sendCodeAgainUser } from '../../Store/Reducers/AuthReducer';

const useNewPassword = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user_email, status} = useSelector(state => state.Auth);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [showshowPass, setShowPass] = useState(false)
    const [showConfirmPass, setShowConfirmPass] = useState(false)

    const validateValues = () => {
        let errors = {}
        if (password === '') {
            errors.password = "Please enter your password";
        }
        if (confirmPassword === '') {
            errors.confirmPassword = "Please enter your confirmPassword";
        }
        return errors;
    }
    
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    }

    const handleChangeConfirmPassword = (e) => {
        setConfirmPassword(e.target.value);
        
        if (errors.confirmPassword) {
            setErrors(prevErrors => ({ ...prevErrors, confirmPassword: '' }));
        }
    }

    const handleShowPass = () => {
        setShowPass(!showshowPass)
    }
    const handleShowConfirmPass = () => {
        setShowConfirmPass(!showConfirmPass)
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        const validationErrors = validateValues();
        setErrors(validationErrors);
        
        // Dispatch resetPasswordUser action if no validation errors
        if (Object.keys(validationErrors).length === 0) {
            await dispatch(resetPasswordUser({
                email:user_email,
                password: password,
                passwordConfirm: confirmPassword
            }))
            .unwrap()
            .then(user => {
                if(user.message === "Password Reseted Successfully") {
                    toast.success(user.message);
    
                    setTimeout(() => {
                        setPassword("")
                        setConfirmPassword("")
                    }, 500)
                    setTimeout(() => {
                        navigate('/auth/login')
                    }, 1500)
                }
            })
            .catch(error => {
                if(error.message) {
                    setErrors({confirmPassword: error.message});
                }
            });
        }
    }

    const notResetPassword = () => {
        setTimeout(() => {
            dispatch(sendCodeAgainUser());
        }, 1000)

        setTimeout(() => {
            navigate("/auth/login")
        }, 1500)
    }

    return [
        status,
        errors,
        password,
        handleChangePassword,
        confirmPassword,
        handleChangeConfirmPassword,
        showshowPass,
        handleShowPass,
        showConfirmPass,
        handleShowConfirmPass,
        handleSubmit,
        notResetPassword
    ]
}

export default useNewPassword;

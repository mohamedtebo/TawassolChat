import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const useAddLogin = () => {
    const dispatch = useDispatch();
    const {user, error} = useSelector(state => state.auth);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [showshowPass, setShowPass] = useState(false)

    const validateValues = () => {
        let errors = {}
        if (email === '') {
            errors.email = "Please enter your email";
        }
        if (password === '') {
            errors.password = "Please enter your password";
        }
        return errors;
    }
    
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
        if (errors.email) {
            setErrors(prevErrors => ({ ...prevErrors, email: '' }));
        }
    }
    
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
        if (errors.password) {
            setErrors(prevErrors => ({ ...prevErrors, password: '' }));
        }
    }

    const handleShowPass = () => {
        setShowPass(!showshowPass)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateValues();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            dispatch(loginUser({
                email: email,
                password: password
            }));
        }
    }

    useEffect(() => {
        if(error) {
            if (error.message === "Email address is incorrect") {
                toast.error(error.message);
            } else if (error.message === "Password is incorrect") {
                toast.error(error.message);
            }

        }
        if(user) {
            if(user.message === "Logged in successfully!") {
                toast.success("Logged in successfully");
                setEmail("")
                setPassword("")
            }
        }
    }, [error, user])

    return [
        email,
        handleChangeEmail,
        password,
        handleChangePassword,
        errors,
        showshowPass,
        handleShowPass,
        handleSubmit
    ]
}

export default useAddLogin;

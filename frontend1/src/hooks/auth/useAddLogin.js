import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { loginUser } from "../../store/reducers/authReducer";

const useAddLogin = () => {
    const dispatch = useDispatch();
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
            }))
            .unwrap()
            .then(user => {
                if(user.message === "Logged in successfully!") {
                    toast.success("Logged in successfully");
                    setEmail("")
                    setPassword("")
                }
            })
            .catch(error => {
                if(error.message === "Email address is incorrect") {
                setErrors({ email: error.message });
                }
                if(error.message === "Password is incorrect") {
                    setErrors({ password: "error.message" });
                }
            });
        }
    }

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

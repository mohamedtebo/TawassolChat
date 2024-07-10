import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { forgotpasswordUser } from "../../store/reducers/authReducer";
import { toast } from "react-toastify";

const useForgotpassword = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [email, setEmail] = useState("");
    const [errors, setErrors] = useState({});

    const validateValues = () => {
        let errors = {}
        if (email === '') {
            errors.email = "Please enter your email";
        }
        return errors;
    }
    
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
        if (errors.email) {
            setErrors(prevErrors => ({ ...prevErrors, email: '' }));
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const validationErrors = validateValues();
        setErrors(validationErrors);

        if (Object.keys(validationErrors).length === 0) {
            await dispatch(forgotpasswordUser({
                email: email
            }))
            .unwrap()
            .then(user => {
                if(user.message) {
                    toast.success(user.message)
                    setTimeout(() => {
                        setEmail("")
                    }, 500)
                    setTimeout(() => {
                        navigate('/auth/verify-email')
                    }, 1000)
                }
            })
            .catch(error => {
                if(error) {
                    if(error.message) {
                        setErrors({ email: error.message });
                    }
                }
            });
        }
    }

    return [
        email,
        handleChangeEmail,
        handleSubmit,
        errors
    ]
}

export default useForgotpassword;

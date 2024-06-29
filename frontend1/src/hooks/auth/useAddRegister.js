import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from '../../store/actions/authAction';
import { registerUser } from "../../store/reducers/authReducer";
import { toast } from "react-toastify";

const useAddRegister = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {user, error} = useSelector(state => state.auth);
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [password, setPassword] = useState("");
    const [errors, setErrors] = useState({});
    const [showshowPass, setShowPass] = useState(false)

    // Function to validate form values
    const validateValues = () => {
        let errors = {}
        if (firstName === '') {
            errors.firstName = "Please enter your first name";
        }
        if (lastName === '') {
            errors.lastName = "Please enter your last name";
        }
        if (email === '') {
            errors.email = "Please enter your email";
        }
        if (password === '') {
            errors.password = "Please enter your password";
        }
        if (phone === '') {
            errors.phone = "Please enter your phone";
        }
        return errors;
    }
    
    // Event handle for input firstName change
    const handleChangeFirstName = (e) => {
        setFirstName(e.target.value);
        if (errors.firstName) {
            setErrors(prevErrors => ({ ...prevErrors, firstName: '' }));
        }
    }
    
    // Event handle for input lastName change
    const handleChangeLastName = (e) => {
        setLastName(e.target.value);
        if (errors.lastName) {
            setErrors(prevErrors => ({ ...prevErrors, lastName: '' }));
        }
    }

    // Event handle for input email change
    const handleChangeEmail = (e) => {
        setEmail(e.target.value);
        if (errors.email) {
            setErrors(prevErrors => ({ ...prevErrors, email: '' }));
        }
    }
    
    // Event handle for input phone change
    const handleChangePhone = (e) => {
        setPhone(e);
        if (errors.phone) {
            setErrors(prevErrors => ({ ...prevErrors, phone: '' }));
        }
    }
    
    // Event handle for input password change
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
        if (errors.password) {
            setErrors(prevErrors => ({ ...prevErrors, password: '' }));
        }
    }

    // Toggle password visibility
    const handleShowPass = () => {
        setShowPass(!showshowPass)
    }

    // Handle submit form
    const handleSubmit = (e) => {
        e.preventDefault();
        const validationErrors = validateValues();
        setErrors(validationErrors);

        // Dispatch registerUser action if no validation errors
        if (Object.keys(validationErrors).length === 0) {
            dispatch(registerUser({
                firstName: firstName,
                lastName: lastName,
                phone: phone,
                email: email,
                password: password
            }));
        }
    }
    
    // useEffect to handle side effects based on user and error state
    useEffect(() => {
        if(error) {
            if(error.message === "Phone already in use, Please login.") {
                toast.error("Phone already in use, Please login.");
                setTimeout(() => {
                    setFirstName("")
                    setLastName("")
                    setEmail("")
                    setPhone("")
                    setPassword("")
                }, 500)
            }
            if(error.message === "Email already in use, Please login.") {
                toast.error("Email already in use, Please login.");
                setTimeout(() => {
                    setFirstName("")
                    setLastName("")
                    setEmail("")
                    setPhone("")
                    setPassword("")
                }, 500)
            }
        }
        if(user) {
            if(user.message === "User registered successfully!") {
                toast.success("User registered successfully");
                setTimeout(() => {
                    setFirstName("")
                    setLastName("")
                    setEmail("")
                    setPhone("")
                    setPassword("")
                }, 500)
                setTimeout(() => {
                    navigate('/auth/login')
                }, 1500)
            }
        }
    }, [error, user])


    return [
        firstName,
        handleChangeFirstName,
        lastName,
        handleChangeLastName,
        email,
        handleChangeEmail,
        phone,
        handleChangePhone,
        password,
        handleChangePassword,
        errors,
        showshowPass,
        handleShowPass,
        handleSubmit,
    ]
}

export default useAddRegister;

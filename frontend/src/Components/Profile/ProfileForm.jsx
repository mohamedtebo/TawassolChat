import React, { useCallback, useState } from 'react';
import { useDropzone } from "react-dropzone";

const ProfileForm = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [about, setAbout] = useState("");
    const [avatar, setAvatar] = useState("");
    const [file, setFile] = useState(null);
    const [errors, setErrors] = useState({});

    const validate = () => {
        const newErrors = {};
        if (!firstName) newErrors.firstName = "First Name is required";
        if (!lastName) newErrors.lastName = "Last Name is required";
        if (!email) newErrors.email = "Email is required";
        if (!phone) newErrors.phone = "Phone is required";
        if (!about) newErrors.about = "About is required";
        if (!avatar) newErrors.avatar = "Avatar is required";
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    }

    const handleInputChange = (e, setState) => {
        setState(e.target.value);
    }

    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        setFile(file);
        setAvatar(URL.createObjectURL(file));
    }, []);

    const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validate()) {
            const formData = new FormData();
            formData.append("firstName", firstName);
            formData.append("lastName", lastName);
            formData.append("email", email);
            formData.append("phone", phone);
            formData.append("about", about);
            formData.append("avatar", file);
    
            // Send the form data to the server
    
            // console.log(formData);
            console.log("Form data:", {
                firstName,
                lastName,
                email,
                phone,
                about,
                avatar: file,
            })
        }
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-700">Avatar</label>
                <div
                    {...getRootProps()}
                    className={`border-2 border-dashed p-4 rounded cursor-pointer ${
                        isDragActive ? "border-blue-500" : "border-gray-300"
                    }`}
                >
                    <input {...getInputProps()} />
                    {isDragActive ? (
                        <p className="text-center text-blue-500">Drop the files here...</p>
                    ) : (
                        <p className="text-center text-gray-500">
                            Drag 'n' drop a file here, or click to select one
                        </p>
                    )}
                    {avatar && (
                        <img
                            src={avatar}
                            alt="avatar preview"
                            className="mt-2 w-24 h-24 object-cover rounded-full"
                        />
                    )}
                </div>
                {errors.avatar && <p className="text-red-500 text-sm">{errors.avatar}</p>}
            </div>

            <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-700">First Name</label>
                <input
                    type="text"
                    value={firstName}
                    onChange={(e) => handleInputChange(e, setFirstName)}
                    className="border border-gray-300 p-2 rounded"
                />
                {errors.firstName && <p className="text-red-500 text-sm">{errors.firstName}</p>}
            </div>
    
            <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-700">Last Name</label>
                <input
                    type="text"
                    value={lastName}
                    onChange={(e) => handleInputChange(e, setLastName)}
                    className="border border-gray-300 p-2 rounded"
                />
                {errors.lastName && <p className="text-red-500 text-sm">{errors.lastName}</p>}
            </div>
    
            <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-700">Email</label>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => handleInputChange(e, setEmail)}
                    className="border border-gray-300 p-2 rounded"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
            </div>
    
            <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-700">Phone</label>
                <input
                    type="text"
                    value={phone}
                    onChange={(e) => handleInputChange(e, setPhone)}
                    className="border border-gray-300 p-2 rounded"
                />
                {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
            </div>
    
            <div className="flex flex-col space-y-2">
                <label className="text-sm font-medium text-gray-700">About</label>
                <textarea
                    value={about}
                    onChange={(e) => handleInputChange(e, setAbout)}
                    rows="4"
                    className="border border-gray-300 p-2 rounded"
                ></textarea>
                {errors.about && <p className="text-red-500 text-sm">{errors.about}</p>}
            </div>
    
            <div className="flex justify-end">
                <button
                    type="submit"
                    className="bg-primary text-white px-4 py-2 rounded"
                >
                    Save
                </button>
            </div>
        </form>
    );
}

export default ProfileForm;

import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { useNavigate } from "react-router-dom";
import Logo from "../assets/logo/logo.svg";

const LoginPage = () => {
    const navigate = useNavigate();
    // const [showLoginbox, setShowLoginbox] = useState(false);
    const [mobileNumber, setMobileNumber] = useState("");
    const [otp, setOtp] = useState("");

    const [login, setLogin] = useState({
        email: "",
        password: "",
        entity: "",
    });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setLogin((prevState) => ({
            ...prevState,
            [name]: value,
        }));
    };
    const handleSubmit = (e) => {
        e.preventDefault();
    };
    const [showAdminLoginbox, setShowAdminLoginbox] = useState(false);

    const handleLogin = (role) => {
        // You can set up different logic based on the role
        if (role === "admin") {
            // Show admin login box
            setShowAdminLoginbox(true);
        }
    };

    const handlePtChange = (event) => {
        const { name, value } = event.target;
        if (name === "mobileNumber") {
            setMobileNumber(value);
        } else if (name === "otp") {
            setOtp(value);
        }
    };
    return (
        <div className="relative flex lg:flex-row flex-col items-center w-full h-screen overflow-hidden bg-black lg:justify-evenly justify-start" style={{ overflowY: 'auto' }}>
            <div className="w-1/2 lg:mt-5 mt-8">
                <div className="flex items-center justify-center w-full">
                    <img
                        src={Logo}
                        alt="Logo"
                        className="lg:w-[80%] w-[60%] max-w-[500px] h-auto opacity-80 animate-rotate-scale-down"
                    />
                </div>
            </div>

            <div className="w-1/2 py-5 shadow-lg bg-opacity-10 rounded-xl">
                <div className="flex flex-col items-center text-white">
                    <>
                        <p className="text-[100px] font-semibold text-white  font-Roboto">
                            ARC
                        </p>
                        {!showAdminLoginbox && (
                            <>
                                <p className="lg:text-[16px] text-[14px] text-white font-Roboto text-center">
                                    All-in-One Health Management System, All
                                    Under One Roof
                                </p>
                                <div>
                                    <p className="mt-5 font-Roboto text-2xl font-semibold text-center text-white">
                                        Login
                                    </p>
                                    <div className="flex items-center lg:mt-5 mt-12 space-x-7">
                                        <button
                                            onClick={() => handleLogin("admin")}
                                            className="px-5 py-3 font-bold rounded-full group w-[200px] text-center text-black bg-white border-white hover"
                                        >
                                            Super Admin
                                        </button>
                                    </div>
                                </div>
                            </>
                        )}
                    </>

                    {showAdminLoginbox && (
                        <form className="lg:w-1/2 w-full animate-slide-in-left">
                            <div className="my-4 text-lg">
                                <TextField
                                    className="w-full"
                                    variant="outlined"
                                    size="small"
                                    InputProps={{
                                        className: "text-white rounded-3xl",
                                        style: {
                                            color: "white", // Set the text color to white
                                            "&::placeholder": {
                                                color: "white", // Set the placeholder color to white
                                            },
                                        },
                                    }}
                                    placeholder="Enter Email"
                                    type="email"
                                    name="email"
                                    required
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            "& fieldset": {
                                                borderColor: "white", // White border
                                            },
                                            "&:hover fieldset": {
                                                borderColor: "white", // White border on hover
                                            },
                                            "&.Mui-focused fieldset": {
                                                borderColor: "white", // White border when focused
                                            },
                                        },
                                    }}
                                    value={login.email}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="mb-4 text-lg">
                                <TextField
                                    className="w-full"
                                    variant="outlined"
                                    size="small"
                                    InputProps={{
                                        className: "text-white rounded-3xl",
                                        style: {
                                            color: "white", // Set the text color to white
                                            "&::placeholder": {
                                                color: "white", // Set the placeholder color to white
                                            },
                                        },
                                    }}
                                    required
                                    sx={{
                                        "& .MuiOutlinedInput-root": {
                                            "& fieldset": {
                                                borderColor: "white", // White border
                                            },
                                            "&:hover fieldset": {
                                                borderColor: "white", // White border on hover
                                            },
                                            "&.Mui-focused fieldset": {
                                                borderColor: "white", // White border when focused
                                            },
                                        },
                                    }}
                                    placeholder="Password"
                                    type="password"
                                    name="password"
                                    value={login.password}
                                    onChange={handleChange}
                                />
                            </div>

                            <div className="flex flex-col items-center justify-center w-full mt-8 text-lg text-black">
                                <button
                                    class="relative inline-flex items-center justify-start inline-block px-5 py-3 overflow-hidden font-bold rounded-full group w-[150px]"
                                    onClick={handleSubmit}
                                >
                                    <span class="w-40 h-32 rotate-45 translate-x-12 -translate-y-2 absolute left-0 top-0 bg-white opacity-[3%]"></span>
                                    <span class="absolute top-0 left-0 w-48 h-48 -mt-1 transition-all duration-500 ease-in-out rotate-45 -translate-x-56 -translate-y-24 bg-white opacity-100 group-hover:-translate-x-8"></span>
                                    <span class="relative w-full text-white transition-colors duration-200 ease-in-out group-hover:text-gray-900 text-center">
                                        Submit
                                    </span>
                                    <span class="absolute inset-0 border-2 border-white rounded-full"></span>
                                </button>

                                <div className="w-full mt-7">
                                    <p className="text-white duration-500 cursor-pointer hover:underline">
                                        Forgot Password?
                                    </p>
                                </div>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    );
};

export default LoginPage;

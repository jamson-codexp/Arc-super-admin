import React from "react";
import { Box, Typography } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import { logoutFormStyle } from "../../styles/common";

const btn = `
    rounded-md px-3.5 py-2 w-28 overflow-hidden
    relative group cursor-pointer border-2 font-medium
    group-hover:text-white
`;
const logoutBtn = btn + " border-blue-600 text-blue-600";
const cancelBtn = btn + " border-red-600 text-red-600";
const btnLayout = `
    absolute w-64 h-0 transition-all duration-300 origin-center
    rotate-45 -translate-x-20 top-1/2 group-hover:h-64
    group-hover:-translate-y-32 ease
`
const btnContent = "relative transition duration-300 group-hover:text-white ease";
const logoutBtnLayout = btnLayout + " bg-blue-600";
const logoutBtnContent = btnContent + " text-blue-600";
const cancelBtnLayout = btnLayout + " bg-red-600";
const cancelBtnContent = btnContent + " text-red-600";

const LogoutForm = ({ handleClose, logoutHandler }) => {
    return (
        <Box sx={logoutFormStyle}>
            <div className="flex w-full justify-end p-4 py-4 fixed z-10">
                <CloseIcon
                    onClick={handleClose} className="text-black cursor-pointer"
                />
            </div>     
            <div className="flex items-center justify-center p-4 mt-12">
                    <Typography variant="h7 font-bold">
                        Are you sure you want to Logout?
                    </Typography>
            </div>
            <div className=" p-4 flex flex-row justify-around">
                <button className={logoutBtn} onClick={logoutHandler}>
                    <span className={logoutBtnLayout}></span>
                    <span className={logoutBtnContent}>Confirm</span>
                </button>
                <button className={cancelBtn} onClick={handleClose}>
                    <span className={cancelBtnLayout}></span>
                    <span className={cancelBtnContent}>Cancel</span>
                </button>
            </div>
        </Box>
    );
};

export default LogoutForm;

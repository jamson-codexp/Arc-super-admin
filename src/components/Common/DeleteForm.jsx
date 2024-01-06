import React from "react";
import { Box, Typography, Button } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import { deleteFormStyle } from "../../styles/common";


const btn = `
    rounded-md px-3.5 py-2 w-28 overflow-hidden
    relative group cursor-pointer border-2 font-medium
    group-hover:text-white
`;
const deleteBtn = btn + " border-blue-600 text-blue-600";
const cancelBtn = btn + " border-red-600 text-red-600";
const btnLayout = `
    absolute w-64 h-0 transition-all duration-300 origin-center
    rotate-45 -translate-x-20 top-1/2 group-hover:h-64
    group-hover:-translate-y-32 ease
`
const btnContent = "relative transition duration-300 group-hover:text-white ease";
const deleteBtnLayout = btnLayout + " bg-blue-600";
const deleteBtnContent = btnContent + " text-blue-600";
const cancelBtnLayout = btnLayout + " bg-red-600";
const cancelBtnContent = btnContent + " text-red-600";

const DeleteForm = ({ title, handleClose, handleDelete, data }) => {
    
    return (
        <Box sx={deleteFormStyle}>
            <div className="flex w-full justify-end p-4 py-4 fixed z-10">
                <CloseIcon
                    onClick={handleClose} className="text-black cursor-pointer"
                />
            </div>     
            <div className="flex items-center justify-center p-4 mt-12">
                    <Typography variant="h7 font-bold">
                        Are you sure you want to delete this content?
                    </Typography>
            </div>
            <div className=" p-4 flex flex-row justify-around">
                <button className={deleteBtn} onClick={handleDelete}>
                    <span className={deleteBtnLayout}></span>
                    <span className={deleteBtnContent}>Delete</span>
                </button>
                <button className={cancelBtn} onClick={handleClose}>
                    <span className={cancelBtnLayout}></span>
                    <span className={cancelBtnContent}>Cancel</span>
                </button>
            </div>
        </Box>
    );
};

export default DeleteForm;

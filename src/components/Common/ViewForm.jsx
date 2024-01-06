import React from "react";
import { Box, Typography, Grid } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import { formStyle } from "../../styles/common";

const ViewForm = ({ title, handleClose, data }) => {
    return (
        <Box sx={formStyle}>
            <div className="flex w-full bg-[#28282B] justify-between p-4 py-4 fixed z-10">
                <Typography variant="h1 font-bold text-white">{title}</Typography>
                <CloseIcon
                    onClick={handleClose} className="text-white cursor-pointer"
                />
            </div>
            <div className="py-4 pl-10 mt-16">
                <Grid container spacing={2}>
                    {data?.map(item => (
                        <Grid item xs={4} key={item.id}>
                            <Typography variant="h4 font-bold">{item.label}</Typography><br />
                            <Typography variant="p uppercase">{item.value}</Typography>
                        </Grid>
                    ))}
                </Grid>
            </div>
        </Box>
    );
};

export default ViewForm;
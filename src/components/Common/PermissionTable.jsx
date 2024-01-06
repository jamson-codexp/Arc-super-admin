// PermissionTable.js
import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Checkbox from "@mui/material/Checkbox";

const PermissionTable = ({ permissions }) => {
    const [selectedPermissions, setSelectedPermissions] = useState([]);

    const handleCheckboxChange = (permissionId) => {
        const isSelected = selectedPermissions.includes(permissionId);
        if (isSelected) {
            setSelectedPermissions((prevSelection) =>
                prevSelection.filter((id) => id !== permissionId)
            );
        } else {
            setSelectedPermissions((prevSelection) => [
                ...prevSelection,
                permissionId,
            ]);
        }
    };

    return (
        <TableContainer
            sx={{
                height: 520,
                overflowX: "scroll",
                "&::-webkit-scrollbar": {
                    width: 0,
                },
            }}
        >
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Permission</TableCell>
                        <TableCell align="center">Add</TableCell>
                        <TableCell align="center">Update</TableCell>
                        <TableCell align="center">View</TableCell>
                        <TableCell align="center">Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {permissions.map((permission) => (
                        <TableRow key={permission.id}>
                            <TableCell>{permission.name}</TableCell>
                            <TableCell align="center">
                                <Checkbox
                                    checked={selectedPermissions.includes(
                                        permission.id
                                    )}
                                    onChange={() =>
                                        handleCheckboxChange(permission.id)
                                    }
                                />
                            </TableCell>
                            <TableCell align="center">
                                <Checkbox
                                    checked={selectedPermissions.includes(
                                        permission.id
                                    )}
                                    onChange={() =>
                                        handleCheckboxChange(permission.id)
                                    }
                                />
                            </TableCell>
                            <TableCell align="center">
                                <Checkbox
                                    checked={selectedPermissions.includes(
                                        permission.id
                                    )}
                                    onChange={() =>
                                        handleCheckboxChange(permission.id)
                                    }
                                />
                            </TableCell>
                            <TableCell align="center">
                                <Checkbox
                                    checked={selectedPermissions.includes(
                                        permission.id
                                    )}
                                    onChange={() =>
                                        handleCheckboxChange(permission.id)
                                    }
                                />
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default PermissionTable;

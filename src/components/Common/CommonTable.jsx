import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import TablePagination from '@mui/material/TablePagination';

function CommonTable({ headers, count, children, page, pageHandler }) {
	const handleChangePage = (event, newPage) => {
		pageHandler(newPage);
	};

	return (
    	<div>
    		<Paper sx={{ width: "100%", overflow: "hidden", marginBottom: 10 }}>
      			<TableContainer>
        			<Table aria-label="simple table">
          				<TableHead>
            				<TableRow>
              					{headers.map((header) => (
                					<TableCell
                  						align={header.align || 'left'}
										sx={{
											minWidth: header.minWidth,
											width: header.width,
											fontWeight: "bold",
											fontSize: "14px",
											textTransform: "uppercase",
											backgroundColor: "#28282B",
											color: "white",
										}}
                  						key={header.id}
                					>
                  						{header.label}
                					</TableCell>
                				))}
            				</TableRow>
          				</TableHead>
						<TableBody>
							{children}
						</TableBody>
        			</Table>
      			</TableContainer>
				<TablePagination
					rowsPerPageOptions={[10]}
					component="div"
					count={count}
					rowsPerPage={10}
					page={page}
					onPageChange={handleChangePage}
				/>
    	</Paper>
  	</div>
  	);
}

export default CommonTable;

import React from "react";
import { Box, Checkbox, FormControlLabel, FormGroup, TextField, Typography } from '@mui/material';
import CloseIcon from "@mui/icons-material/Close";
import Select from 'react-select'

const style = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: "30%",
	minHeight: 450,
    maxHeight: "90%",
	bgcolor: 'background.paper',
	boxShadow: 24,
    overflow: "auto",
    borderRadius: 2,
};

const headerStyle = {
    position: 'sticky',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    top: 0,
    left: 0,
    right: 0,
    padding: 16,
    backgroundColor: '#28282B',
    zIndex: 10,
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
};

const btn = `
    rounded-md px-3.5 py-2 w-28 overflow-hidden
    relative group cursor-pointer border-2 font-medium
    group-hover:text-white
`;
const saveBtn = btn + " border-green-600 text-green-600";
const cancelBtn = btn + " border-red-600 text-red-600";
const btnLayout = `
    absolute w-64 h-0 transition-all duration-300 origin-center
    rotate-45 -translate-x-20 top-1/2 group-hover:h-64
    group-hover:-translate-y-32 ease
`
const btnContent = "relative transition duration-300 group-hover:text-white ease";
const saveBtnLayout = btnLayout + " bg-green-600";
const saveBtnContent = btnContent + " text-green-600";
const cancelBtnLayout = btnLayout + " bg-red-600";
const cancelBtnContent = btnContent + " text-red-600";

const AddForm = ({ title, handleSave, handleClose, updateForm, form, formContent, updateFormCheckbox }) => {

	console.log("form", form);

	const [state, setState] = React.useState({
		OPD: true,
		IPD: false,
		LAB: false,
	  });
	
	  const handleChange = (event) => {
		setState({
		  ...state,
		  [event.target.name]: event.target.checked,
		});
	  };

    return (
        <Box sx={style}>
			<div style={headerStyle}>
			<Typography variant="h1 font-bold text-white">{title}</Typography>
			<CloseIcon
				onClick={handleClose} className="text-white cursor-pointer"
			/>
			</div>
			<div className="px-4">
			{formContent?.map(item => {
				if (item?.type === "input") {
					return (
						<div key={item.id}>
						<Typography variant="subtitle2" sx={{ mt: 2, color: 'black', fontFamily: 'Roboto', fontWeight: 500 }}>
							{item?.label}{item?.isRequired ? "*" : ""}
						</Typography>
						<TextField
							onChange={updateForm}
							fullWidth
							sx={{ mt: 1, fontSize: '0.875rem' }}
							name={item?.name}
							value={form[item?.name]}
						/>
						</div>
					);
				} else if (item?.type === "select") {
					return (
						<div key={item.id}>
							<Typography variant="subtitle2" sx={{ mt: 2, mb: 1, color: 'black', fontFamily: 'Roboto', fontWeight: 500 }}>{item?.label}</Typography>
							<Select
								onChange={(selectedOption) => updateForm({ target: { name: item?.name, value: selectedOption.value } })}
								options={item?.options}
								defaultValue={item?.options?.filter(entry => entry.value === form[item?.name])[0]}
								className="uppercase"
							/>
						</div>
					);
				}  else if (item?.type === "checkbox") {
					return (
						<>
							<Typography variant="subtitle2" sx={{ mt: 2, color: 'black', fontFamily: 'Roboto', fontWeight: 500 }}>Features</Typography>
							<FormGroup key={item.id} row>
								{
									item?.options.map((option, index) => 
										<FormControlLabel
											key={index}
											value={option.name}
											onChange={(event, value) =>{
												const arr =
												form.features ||
												[];
											const index =
												arr.indexOf(
													event
														.target
														.value
												);

											if (
												value ===
													false &&
												index >
													-1
											) {
												arr.splice(
													index,
													1
												);
											} else if (
												value ===
													true &&
												index ===
													-1
											) {
												arr.push(
													event
														.target
														.value
												);
											}

											updateFormCheckbox(
												arr
											);} }
											control={
												<Checkbox />
											}
											label={option.label}
										/>
									)
								}
							</FormGroup>
						</>
					);
				  }
				return null;
			})}
			</div>
			<div className=" p-4 flex flex-row justify-around">
				<button className={cancelBtn} onClick={handleClose}>
					<span className={cancelBtnLayout}></span>
					<span className={cancelBtnContent}>Cancel</span>
				</button>
				<button className={saveBtn} onClick={handleSave}>
					<span className={saveBtnLayout}></span>
					<span className={saveBtnContent}>Save</span>
				</button>
			</div>
      	</Box>
    );
};

export default AddForm;
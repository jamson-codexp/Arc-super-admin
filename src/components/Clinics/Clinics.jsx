
import React, { useState } from 'react';
import CommonTable from '../Common/CommonTable';
import { Modal, TableCell, TableRow } from '@mui/material';
import PageHeader from '../Common/PageHeader';
import { MdDeleteOutline, MdOutlineEdit, MdOutlineRemoveRedEye } from 'react-icons/md';
import { queryConfigs } from '../../hooks/config';
import { useGetQuery } from '../../hooks/queryHook';
import {
	outlineBtnGreen, outlineBtnBlue, outlineBtnRed,
	btnTransitionGreen, btnTransitionBlue, btnTransitionRed,
	btnHoverBlue, btnHoverRed, btnHoverGreen
} from "../../styles/common";
import AddClinic from './AddClinic';
import EditClinic from './EditClinic';
import ViewForm from '../Common/ViewForm';
import DeleteForm from '../Common/DeleteForm';
import { BiSearchAlt } from 'react-icons/bi';
import Checkbox from '@mui/material/Checkbox';



const clinicHeaders = [
  { id: 1, label: "Name", minWidth: 100, align: "" },
  { id: 2, label: "Contact", minWidth: 100, align: "" },
  { id: 3, label: "Type", minWidth: 100, align: "" },
  { id: 4, label: "Address", minWidth: 100, align: "" },
  { id: 5, label: "City", minWidth: 100, align: "" },
  { id: 6, label: "State", minWidth: 100, align: "" },
  { id: 7, label: "Pincode", minWidth: 100, align: "" },
  { id: 8, label: "Created on", minWidth: 100, align: "" },
  { id: 9, label: "Action", minWidth: 100, align: "center" }
];


const initialForm = {
	name : "",
	contact : "",
	type : "",
	address : "",
	city : "",
	state : "",
	pincode : "",
	logo : "",
	gst : "",
	features : [],
	reg_no : "",
	created_on : "",
};

const checkboxOptions = [
	{
		label: "OPD",
		name: "OPD",
	},
	{
		label: "IPD",
		name: "IPD",
	},
	{
		label: "LAB",
		name: "LAB",
	}
]

const formContent = [
	{ id: 1, label: "Name", name: "name", type: "input" },
	{ id: 2, label: "Contact", name: "contact", type: "input" },
	{ id: 3, label: "Type", name: "type", type: "input" },
	{ id: 4, label: "Address", name: "address", type: "input" },
	{ id: 5, label: "City", name: "city", type: "input" },
	{ id: 6, label: "State", name: "state", type: "input" },
	{ id: 7, label: "Pincode", name: "pincode", type: "input" },
	// { id: 8, label: "Logo", name: "logo", type: "input" },
	{ id: 8, label: "Gst", name: "gst", type: "input" },
	{ id: 9, options: checkboxOptions, type: "checkbox"},
	// { id: 9, label: "OPD", label2: "IPD", label3: "Lab", name: "opd", name2: "ipd", name3: "lab", type: "checkbox"},
	{ id: 10, label: "Regd. no", name: "reg_no", type: "input" },

];

const label = { inputProps: { 'aria-label': 'Checkbox demo' } };



function Clinics() {

	const { queryKey, queryFn } = queryConfigs.getEntities;
	const [showModal, setShowModal] = useState(false);
	const [showEditModal, setShowEditModal] = useState(false);
	const [showViewModal, setShowViewModal] = useState(false);
	const [showDeleteModal, setShowDeleteModal] = useState(false);
	const [selectedUser, setSelectedUser] = useState({...initialForm});
	const [viewData, setViewData] = useState(null);
	const [offsetValue, setOffsetValue] = useState(0);
	const [page, setPage] = useState(0);

	const { data } = useGetQuery({
		key: queryKey,
		offsetValue,
		func: queryFn
	});
	
	const toggleModal = () => setShowModal(prev => !prev);
	const toggleEditModal = () => setShowEditModal(prev => !prev);
	const toggleViewModal = () => setShowViewModal(prev => !prev);
	const toggleDeleteModal = () => setShowDeleteModal(prev => !prev);

	const pageHandler = (page) => {
		const offset = page * 10;
		setOffsetValue(offset);
		setPage(page);
	};

	const editHandler = (entity) => {
		setSelectedUser({...entity});
		toggleEditModal();
	};

	const viewHandler = (entity) => {
		const viewData = [
			{ id: 1, label: "Name", value: entity?.name },
			{ id: 2, label: "Contact", value: entity?.contact },
			{ id: 3, label: "Type", value: entity?.type },
			{ id: 4, label: "Address", value: entity?.address },
			{ id: 5, label: "City", value: entity?.city },
			{ id: 6, label: "State", value: entity?.state },
			{ id: 7, label: "Pincode", value: entity?.pincode },
			{ id: 8, label: "Logo", value: entity?.logo },
			{ id: 9, label: "Gst", value: entity?.gst },
			{ id: 10, label: "Regd. no", value: entity?.reg_no },
			{ id: 11, label: "Created On", value: formatDate (entity?.created_on) },
		];
		setViewData(viewData);
		toggleViewModal();
	};
	const deleteHandler = (entity) => {
		setSelectedUser(viewData);
		toggleDeleteModal();
	};

	const formatDate = (dateString) => {
		const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
		return new Date(dateString).toLocaleDateString(undefined, options);
	  };

	return (
		<div className='py-12'>
			<div className='flex justify-between items-center'>
				<div className=''>
					<PageHeader title="ENTITIES" buttonText="Add Entity" showButton={true} clickHandler={()=> setShowModal(true)} />
				</div>
				<div className='w-[20%] ml-4'>
					<div className="relative border rounded-full">
						<input
							type="text"
							placeholder="Search..."
							className="w-[100%] py-2 p-6 focus:outline-none rounded-full transition-all duration-300"
						/>
						<div className="absolute right-2 top-1/2 transform -translate-y-1/2 text-orange">
							<BiSearchAlt />
						</div>
					</div>
				</div>
			</div>
			<CommonTable
				headers={clinicHeaders}
				count={data?.result?.count || 0}
				pageHandler={pageHandler}
				page={page}
			>
				{data?.result?.list?.map((entity) => (
					<TableRow key={entity?._id}>
						<TableCell>{entity?.name}</TableCell>
						<TableCell>{entity?.contact}</TableCell>
						<TableCell>{entity?.type}</TableCell>
						<TableCell>{entity?.address}</TableCell>
						<TableCell>{entity?.city}</TableCell>
						<TableCell>{entity?.state}</TableCell>
						<TableCell>{entity?.pincode}</TableCell>
						<TableCell>{formatDate(entity?.created_on)}</TableCell>
						<TableCell align='center'>
							<div className='space-x-3 grid-flow-col grid'>
								<button className={outlineBtnGreen} onClick={() => viewHandler(entity)}>
									<span className={btnTransitionGreen}></span>
									<span className={btnHoverGreen}><MdOutlineRemoveRedEye/></span>
								</button>
									<button className={outlineBtnBlue} onClick={() => editHandler(entity)}>
										<span className={btnTransitionBlue}></span>
										<span className={btnHoverBlue}><MdOutlineEdit/></span>
								</button>
								<button className={outlineBtnRed} onClick={() => deleteHandler(entity)}>
									<span className={btnTransitionRed}></span>
									<span className={btnHoverRed}><MdDeleteOutline/></span>
								</button>
							</div>
						</TableCell>
					</TableRow>	
				))}	
			</CommonTable>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={showModal}
				onClose={toggleModal}
				closeAfterTransition
			>
				<AddClinic
					toggleModal={toggleModal}
					initialForm={initialForm}
					formContent={formContent}
				/>
			</Modal>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={showEditModal}
				onClose={toggleEditModal}
				closeAfterTransition
			>
				<EditClinic
					toggleModal={toggleEditModal}
					initialForm={selectedUser}
					formContent={formContent}
				/>
			</Modal>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={showViewModal}
				onClose={toggleViewModal}
				closeAfterTransition
			>
				<ViewForm
					title="Entity Details"
					handleClose={toggleViewModal}
					data={viewData}
				/>
			</Modal>
			<Modal
				aria-labelledby="transition-modal-title"
				aria-describedby="transition-modal-description"
				open={showDeleteModal}
				onClose={toggleDeleteModal}
				closeAfterTransition
			>
				<DeleteForm
					handleClose={toggleDeleteModal}
					data={viewData}
				/>
			</Modal>
		</div>
	);
}

export default Clinics;

import React, { useState } from 'react';
import CommonTable from '../Common/CommonTable';
import { Modal, TableCell, TableRow } from '@mui/material';
import PageHeader from '../Common/PageHeader';
import AddUser from './AddUser';
import { useGetQuery } from "../../hooks/queryHook";
import { queryConfigs } from "../../hooks/config";
import {
	outlineBtnGreen, outlineBtnBlue, outlineBtnRed,
	btnTransitionGreen, btnTransitionBlue, btnTransitionRed,
	btnHoverBlue, btnHoverRed, btnHoverGreen
} from "../../styles/common";
import { MdDeleteOutline, MdOutlineEdit, MdOutlineRemoveRedEye } from 'react-icons/md';
import { BiSearchAlt } from 'react-icons/bi';
import ViewForm from '../Common/ViewForm';
import EditUser from './EditUser';
import DeleteForm from '../Common/DeleteForm';

const userHeaders = [
  { id: 1, label: "Name", minWidth: 100, align: "" },
  { id: 2, label: "Email", minWidth: 100, align: "" },
  { id: 3, label: "Mobile", minWidth: 100, align: "" },
  { id: 4, label: "Role", minWidth: 100, align: "" },
  { id: 5, label: "Entity Name", minWidth: 100, align: "" },
  { id: 6, label: "Created on", minWidth: 100, align: "" },
  { id: 7, label: "Action", minWidth: 100, align: "center" }
];

const initialForm = {
    name : "",
	email : "",
	mobile : "",
	role : "",
	entity : "",
	clinic : "",
	created_on : "",
};


const formContent = [
	{ id: 1, label: "Name", name: "name", type: "input" },
	{ id: 2, label: "Email", name: "email", type: "input" },
	{ id: 3, label: "Mobile", name: "mobile", type: "input" },
	{ id: 4, label: "Role", name: "role", type: "select" },
	{ id: 5, label: "Entity Name", name: "entity", type: "select" },
];


function Users({ user }) {

	const { queryKey, queryFn } = queryConfigs.getUsers;
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

	const editHandler = (user) => {
		setSelectedUser({...user});
		toggleEditModal();
	};

	const viewHandler = (user) => {
		const viewData = [
			{ id: 1, label: "Name", value: user?.name },
			{ id: 2, label: "Email", value: user?.email },
			{ id: 3, label: "Mobile", value: user?.mobile },
			{ id: 4, label: "Role", value: user?.role_name },
			{ id: 5, label: "Entity Name", value: user?.entity_name },
			{ id: 6, label: "Created On", value: formatDate(user?.created_on) },
		];
		setViewData(viewData);
		toggleViewModal();
	};
	const deleteHandler = (user) => {
		setSelectedUser(viewData);
		toggleDeleteModal();
	};

	const formatDate = (dateString) => {
		const options = { year: 'numeric', month: 'numeric', day: 'numeric' };
		return new Date(dateString).toLocaleDateString(undefined, options);
	  };

	return (
		<div className='py-12 flex flex-col'>
			<div className='flex justify-between items-center'>
				<div className=''>
					<PageHeader title="USERS" buttonText="Add User" showButton={true} clickHandler={()=> setShowModal(true)} />
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
				headers={userHeaders}
				count={data?.result?.count || 0}
				pageHandler={pageHandler}
				page={page}
			>
				{data?.result?.list?.map((user) => (
					<TableRow key={user?._id}>
						<TableCell>{user?.name}</TableCell>
						<TableCell>{user?.email}</TableCell>
						<TableCell>{user?.mobile}</TableCell>
						<TableCell>{user?.role_name}</TableCell>
						<TableCell>{user?.entity_name}</TableCell>
						<TableCell>{formatDate(user?.created_on)}</TableCell>
						<TableCell align='center'>
							<div className='space-x-3'>
								<button className={outlineBtnGreen} onClick={() => viewHandler(user)}>
									<span className={btnTransitionGreen}></span>
									<span className={btnHoverGreen}><MdOutlineRemoveRedEye/></span>
								</button>
								<button className={outlineBtnBlue} onClick={() => editHandler(user)}>
									<span className={btnTransitionBlue}></span>
									<span className={btnHoverBlue}><MdOutlineEdit/></span>
								</button>
								<button className={outlineBtnRed} onClick={() => deleteHandler(user)}>
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
				<AddUser
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
				<EditUser
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
					title="User Details"
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

export default Users;
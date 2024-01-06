import React, { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { queryConfigs } from "../../hooks/config";
import { useMutationQuery } from "../../hooks/queryHook";
import AddForm from "../Common/AddForm";
import { showNotification } from "../../sevices/helper";
import { validate } from "../../sevices/validation";

const AddUser = ({ toggleModal, initialForm, formContent }) => {
	const client = useQueryClient();
	const { mutationFn, invalidateKey } = queryConfigs.addUser;
	const [form, setForm] = useState({...initialForm});
	
    const updateForm = (event) => {
		const { name, value } = event.target;
		setForm(prev => ({...prev, [name]: value}));
	};

    const onSuccess = () => {
        showNotification("success", "User Added");
        toggleModal();
    };

	const mutation = useMutationQuery({
		key: invalidateKey,
		func: mutationFn,
		onSuccess,
		client
	});

	const submit = () => {
		if(validate(form, "user")){
			mutation.mutate(form);
		} else {
			showNotification("error", "Missing Required Fields");			
		}
	};

	return (
		<AddForm
			title="Add User"
			handleClose={toggleModal}
			updateForm={updateForm}
			form={form}
			formContent={formContent}
			handleSave={submit}
		/>
	);
};

export default AddUser;
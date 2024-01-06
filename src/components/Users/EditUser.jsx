import React, { useState } from "react";
import { queryConfigs } from "../../hooks/config";
import { useQueryClient } from "@tanstack/react-query";
import { useMutationQuery } from "../../hooks/queryHook";
import AddForm from "../Common/AddForm";
import { validate } from "../../sevices/validation";
import { showNotification } from "../../sevices/helper";

const EditUser = ({ toggleModal, initialForm, formContent }) => {
    const [form, setForm] = useState({...initialForm});
	const client = useQueryClient();
	const { mutationFn, invalidateKey } = queryConfigs.updateUser;
	
    const updateForm = (event) => {
		const { name, value } = event.target;
		setForm(prev => ({...prev, [name]: value}));
	};

    const onSuccess = () => {
        showNotification("success", "User Updated");
        toggleModal();
    }
	
    const mutation = useMutationQuery({
		key: invalidateKey,
		func: mutationFn,
		onSuccess,
		client
	});
	
    const submit = () => {
		if(validate(form, "users")){
			mutation.mutate({ id: form.id, body: form });
		} else {
			showNotification("error", "Missing Required Fields");			
		}
	};

	return (
		<AddForm
			title="Edit User"
			handleClose={toggleModal}
			updateForm={updateForm}
			form={form}
			formContent={formContent}
			handleSave={submit}
		/>
	);
};

export default EditUser;
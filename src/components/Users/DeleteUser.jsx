import React, { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { queryConfigs } from "../../hooks/config";
import { useMutationQuery } from "../../hooks/queryHook";
import { showNotification } from "../../services/helper";
import { validate } from "../../services/validation";
import DeleteForm from "../Common/DeleteForm";

const DeleteUser = ({ toggleModal, initialForm, formContent }) => {
	const client = useQueryClient();
	const { mutationFn, invalidateKey } = queryConfigs.deleteUser;
	const [form, setForm] = useState({...initialForm});
	
    const updateForm = (event) => {
		const { name, value } = event.target;
		setForm(prev => ({...prev, [name]: value}));
	};

    const onSuccess = () => {
        showNotification("success", "User Deleted");
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
		}
	};

	return (
		<DeleteForm
			title="Delete User"
			handleClose={toggleModal}
			updateForm={updateForm}
			form={form}
			formContent={formContent}
			handleSave={submit}
		/>
	);
};

export default DeleteUser;
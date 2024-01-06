import React, { useState } from "react";
import { useQueryClient } from "@tanstack/react-query";
import { queryConfigs } from "../../hooks/config";
import { useMutationQuery } from "../../hooks/queryHook";
import AddForm from "../Common/AddForm";
import { showNotification } from "../../sevices/helper";
import { validate } from "../../sevices/validation";

const AddClinic = ({ toggleModal, initialForm, formContent }) => {
	const client = useQueryClient();
	const { mutationFn, invalidateKey } = queryConfigs.addEntity;
	const [form, setForm] = useState({...initialForm});
	
    const updateForm = (event) => {
		const { name, value } = event.target;
		setForm(prev => ({...prev, [name]: value}));
	};

	const updateFormCheckbox = (arr) => {
		setForm(prev => ({...prev, features: arr}))
	}

    const onSuccess = () => {
        showNotification("success", "Entity Added");
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
			title="Add Entity"
			handleClose={toggleModal}
			updateForm={updateForm}
			updateFormCheckbox={updateFormCheckbox}
			form={form}
			formContent={formContent}
			handleSave={submit}
		/>
	);
};

export default AddClinic;
import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    defaultParams : {
		userId: "",
        isHidden: "",
		offset: 0,
		limit: 10
	},
    searchField: {
        userValue: null,
    }
};

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
		setUserParams: (state, action) => {
			state.defaultParams = action.payload;
		},
		setUserSearchField: (state, action) => {
			const { userValue } = action.payload;
			state.searchField.userValue = userValue;
		},
		clearUsers: (state, action) => {
			return initialState;
		},
    },
})

export const selectParamsUsers = (state) => state.users.defaultParams;
export const selectSearchFieldUsers = (state) => state.users.searchField;

export const {setUserParams, setUserSearchField, clearUsers} = usersSlice.actions

export default usersSlice.reducer
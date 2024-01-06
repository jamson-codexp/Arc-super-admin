import { createSlice } from "@reduxjs/toolkit";
import { clearAuthHeader, setAuthHeader } from "../../sevices/api";

const authSlice = createSlice({
    name: 'auth',
    initialState: {user: null, token: null},
    reducers: {
        setCredentials: (state, action) => {
            const {user, token} = action.payload;
            state.user = user;
            state.token = token
            setAuthHeader(token);
        },
        logOut: (state, action) => {
            state.user = null;
            clearAuthHeader();
        }
    },
})

export const { setCredentials, logOut } = authSlice.actions;

export default authSlice.reducer;

export const selectCurrentAuth = (state) => state.auth;
import { configureStore } from "@reduxjs/toolkit";

import UsersReducer from "./features/userSlice";
import AuthReducer from "./features/authSlice";

export const store = configureStore({
    reducer: {
        users: UsersReducer,
        auth: AuthReducer,
    }
});
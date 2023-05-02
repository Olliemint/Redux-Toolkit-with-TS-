import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/Auth-slice";


export const store = configureStore({
    reducer: {
        authlogin: authReducer,
    },
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/Auth-slice";
import { productsApi } from "../features/products/products-slice";

export const store = configureStore({
    reducer: {
        authlogin: authReducer,
        [productsApi.reducerPath]: productsApi.reducer,
    },
    middleware: (getDefaultMiddleware) => {
        return getDefaultMiddleware().concat(productsApi.middleware);
    }
});


export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
import { createSlice,createAsyncThunk} from "@reduxjs/toolkit";

import axios from "axios";

interface UserDataType{
    email: string;
    password: string;
}

//  interface AuthState {
//     loading: boolean;
//     error: string | null;
    
//     userLogin: {}; 
// }

const initialState = {
    loading:false,
    error: "",
    userLogin: {}
}


export const login = createAsyncThunk(
  "user/postUser",
    async (userData: UserDataType) => {
        const loginData = {
            username: userData.email,
            password: userData.password,
      }
    const {data} = await axios.post(
      "https://web-production-a55a3.up.railway.app/api/users/login/",
        loginData
    );
    return data;
  }
);





const authSlice = createSlice({
    name: "auth",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder.addCase(login.pending, (state) => {
            state.loading = true;
        }),
            builder.addCase(login.fulfilled, (state, action) => {
                state.loading = false;
                state.error = '';
                state.userLogin = action.payload;
            }),
            builder.addCase(login.rejected, (state, action) => { 
                state.loading = false;
                state.error = action.error.message || ''
            });
    },


});


export default authSlice.reducer;


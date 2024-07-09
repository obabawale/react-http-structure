import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import AuthService from "../services/auth.service";
import { UserToken } from "../App.types";
import { RootState } from "../app/store";

interface userState {
    userToken: UserToken | null,
    isLoading: boolean;
    error: string;
}

// Define the initial state using that type
const initialState: userState = {
    userToken: null,
    isLoading: false,
    error: '',
}

export const login = createAsyncThunk('user/login', async ({ email, password }: { email: string, password: string }) => {
    const res = await AuthService.login({ email, password })
    console.log(res, res.status, res.statusText);
    return res;
});

export const authSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
        builder
            .addCase(login.pending, state => {
                state.isLoading = true
            })
            .addCase(login.fulfilled, (state, action) => {
                state.isLoading = false;
                state.error = '';
                state.userToken = action.payload;
            })
            .addCase(login.rejected, (state, action) => {
                state.isLoading = false;
                if (action.error && typeof action.error.message === 'string') {
                    state.error = action.error.message
                }
            })
    },
})

export const userEmail = (state: RootState) => state.auth.userToken?.user.email;
export const getCurrentUser = (state: RootState) => state.auth.userToken;
export const selectUserId = (state: RootState) => state.auth.userToken?.user.id;
export default authSlice.reducer
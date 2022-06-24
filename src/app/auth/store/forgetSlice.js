import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const sendOtp = createAsyncThunk('auth/forget/sendOtp',
    async (phone, { dispatch, getState }) => {
        const response = await axios.post('http://api.gariconnect.com:8080/api/auth/forgotpassword', phone);
        const data = await response.data;

        return data;
    });

const initialState = {
    data: [],
    errors: [],
};

const forgetSlice = createSlice({
    name: 'auth/forget',
    initialState,
    reducers: {
        otpData: (state, action) => {
            state.data = action.payload;
        },
        otpSuccess: (state, action) => {
            state.success = true;
            state.errors = [];
        },
        otpError: (state, action) => {
            state.success = false;
            state.errors = action.payload;
        },
    },
    extraReducers: {
        [sendOtp.pending]: (state, action) => {
            state.status = 'loading';
        },
        [sendOtp.fulfilled]: (state, { payload }) => {
            state.data = payload;
            state.status = 'success';
        },
        [sendOtp.rejected]: (state, action) => {
            state.status = 'failed';
        },
    },
});

export const { otpData, otpSuccess, otpError } = forgetSlice.actions;
export default forgetSlice.reducer;
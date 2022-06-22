import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const sendOtp = createAsyncThunk('forgotPassword/sendOtp',
    async (phone, { dispatch, getState }) => {
        const response = await axios.post('http://192.168.100.36:8080/api/auth/forgotpassword', { phone });
        const data = await response.data;

        return data;
    });

const forgotPasswordSlice = createSlice({
    name: 'forgotPassword',
    initialState: {
        data: {},
        status: null
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
    }
});

export default forgotPasswordSlice.reducer;


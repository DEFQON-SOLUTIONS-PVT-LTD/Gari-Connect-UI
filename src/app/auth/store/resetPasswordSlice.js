import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

export const passReset = createAsyncThunk('auth/resetPassword/passReset',
    async (params, { dispatch, getState }) => {
        const response = await axios.put('http://api.gariconnect.com:8080/api/auth/resetpassword', params);
        const data = await response.data;

        return data;
    });

const initialState = {
    data: [],
    errors: [],
};

const resetPasswordSlice = createSlice({
    name: 'auth/resetPassword',
    initialState,
    reducers: {
        resetData: (state, action) => {
            state.data = action.payload;
        },
        resetPasswordSuccess: (state, action) => {
            state.success = true;
            state.errors = [];
        },
        resetPasswordError: (state, action) => {
            state.success = false;
            state.errors = action.payload;
        },
    },
    extraReducers: {
        [passReset.pending]: (state, action) => {
            state.status = 'loading';
        },
        [passReset.fulfilled]: (state, { payload }) => {
            state.data = payload;
            state.status = 'success';
        },
        [passReset.rejected]: (state, action) => {
            state.status = 'failed';
        },
    },
});

export const { resetData } = resetPasswordSlice.actions;
export default resetPasswordSlice.reducer;
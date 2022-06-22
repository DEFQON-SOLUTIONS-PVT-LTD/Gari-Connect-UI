import { combineReducers } from '@reduxjs/toolkit';
import forgotPassword from './forgotPasswordSlice';

const authScreensReducers = combineReducers({
    forgotPassword
});

export default authScreensReducers;
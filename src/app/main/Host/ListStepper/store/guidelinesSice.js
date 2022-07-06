import { createSlice } from "@reduxjs/toolkit";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = [];

const guidelinesSlice = createSlice({
  name: "guidelines",

  initialState,

  reducers: {
    addGuidelines: (state, action) => {
      state.guidelines.push(action.payload);
    },
  },
});

export const { addguidelines } = guidelinesSlice.actions;
export default guidelinesSlice.reducer;

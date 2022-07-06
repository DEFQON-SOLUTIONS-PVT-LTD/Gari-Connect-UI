import { createSlice } from "@reduxjs/toolkit";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
  guidelines: []
};

const guidelinesSlice = createSlice({
  name: "guidelines",

  initialState,

  reducers: {
    addGuidelines: (state, action) => {
      state.guidelines.push(action.payload);
      state.guidelines = [...new Set(state.guidelines)]
    },
  },
});

export const { addGuidelines } = guidelinesSlice.actions;
export default guidelinesSlice.reducer;

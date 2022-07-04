import { createSlice } from "@reduxjs/toolkit";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
  guidelines: [],
};

const guidelinesSlice = createSlice({
  name: "guidelines",

  initialState,

  reducers: {
    addGuidelines: (state, action) => {
      state.guidelines = action.payload.guidelines;
    },
  },
});

export const { addguidelines } = guidelinesSlice.actions;
export default guidelinesSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
  guidelines: {
    blueTooth: {
      id: 7,
      availability: false,
    },
    keylessEntry: {
      id: 8,
      availability: false,
    },
    appleCar: {
      id: 9,
      availability: false,
    },
    USB: {
      id: 10,
      availability: false,
    },
    backupCamera: {
      id: 11,
      availability: false,
    },
    auxInput: {
      id: 12,
      availability: false,
    },
    tollPass: {
      id: 13,
      availability: false,
    },
    heatedSeat: {
      id: 14,
      availability: false,
    },
    sunRoof: {
      id: 15,
      availability: false,
    },
    wheelDriver: {
      id: 16,
      availability: false,
    },
    GPS: {
      id: 17,
      availability: false,
    },
    auxInput2: {
      id: 12,
      availability: false,
    },
  },
};

const guidelinesSlice = createSlice({
  name: "guidelines",

  initialState,

  reducers: {
    addGuidelines: (state, action) => {
      state.guidelines = action.payload;
    },
  },
});

export const { addGuidelines } = guidelinesSlice.actions;
export default guidelinesSlice.reducer;

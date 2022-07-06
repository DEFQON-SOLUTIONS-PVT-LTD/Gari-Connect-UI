import { createSlice } from "@reduxjs/toolkit";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
  days: [],
};

const availabilitiesSlice = createSlice({
  name: "setAvailability",

  initialState,

  reducers: {
    addDayId: (state, action) => {
      state.days.push(action.payload);
    },
  },
});

export const { addDayId } = availabilitiesSlice.actions;
export default availabilitiesSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
  days: [],
};


const daysId = {
  monday: "1",
  tuesday: "2",
  wednesday: "3",
  thursday: "4",
  friday: "5",
  saturday: "6",
  sunday: "7",
}

const availabilitiesSlice = createSlice({
  name: "setAvailability",

  initialState,

  reducers: {
    addDayId: (state, action) => {
      state.days.push(action.payload);
      state.days = [...new Set(state.days)]
    },
  },
});

export const { addDayId } = availabilitiesSlice.actions;
export default availabilitiesSlice.reducer;

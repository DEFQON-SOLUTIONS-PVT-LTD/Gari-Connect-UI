import { createSlice } from "@reduxjs/toolkit";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
  availabilities: [],
};

const availabilitiesSlice = createSlice({
  name: "availabilities",

  initialState,

  reducers: {
    addAvailabilities: (state, action) => {
      state.availabilities = action.payload.availabilities;
    },
  },
});

export const { addavailabilities } = availabilitiesSlice.actions;
export default availabilitiesSlice.reducer;

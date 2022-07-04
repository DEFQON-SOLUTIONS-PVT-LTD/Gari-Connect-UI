import { createSlice } from "@reduxjs/toolkit";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
  latitude: "546265",
  longitude: "25656",
  address: "195 military",
};

const locationSlice = createSlice({
  name: "location",

  initialState,

  reducers: {
    addLocation: (state, action) => {
      state.latitude = action.payload.latitude;
      state.longitude = action.payload.longitude;
      state.address = action.payload.address;
    },
  },
});

export const { addLocation } = locationSlice.actions;
export default locationSlice.reducer;

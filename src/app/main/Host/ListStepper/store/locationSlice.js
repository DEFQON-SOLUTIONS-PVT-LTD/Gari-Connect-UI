import { createSlice } from "@reduxjs/toolkit";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
  latitude: "",
  longitude: "",
  address: "",
  city: "",
  area: "",
  streetAddress: "",
  zipCode: ""
};

const locationSlice = createSlice({
  name: "location",

  initialState,

  reducers: {
    addAddress: (state, action) => {
      state.address = action.payload;
    },
    addLatitude: (state, action) => {
      state.latitude = action.payload;
    },
    addLongitude: (state, action) => {
      state.longitude = action.payload;
    },
    addCity: (state, action) => {
      state.city = action.payload;
    },
    addArea: (state, action) => {
      state.area = action.payload;
    },
    addStreetAddress: (state, action) => {
      state.streetAddress = action.payload;
    },
    addZipCode: (state, action) => {
      state.zipCode = action.payload;
    },
  },
});

export const { addAddress, addArea, addCity, addLatitude, addLongitude, addStreetAddress, addZipCode } =
  locationSlice.actions;
export default locationSlice.reducer;

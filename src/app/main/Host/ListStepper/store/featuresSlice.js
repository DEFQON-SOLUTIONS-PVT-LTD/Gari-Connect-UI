import { createSlice } from "@reduxjs/toolkit";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
  mandatoryFeatures: {
    fueltype: "",
    kmpl: "",
    doors: "",
    seats: "",
  },

  featuresList: {
    blueTooth: {
      id: 9,
      availability: false,
    },
    keylessEntry: {
      id: 10,
      availability: false,
    },
    appleCar: {
      id: 11,
      availability: false,
    },
    USB: {
      id: 12,
      availability: false,
    },
    backupCamera: {
      id: 13,
      availability: false,
    },
    auxInput: {
      id: 14,
      availability: false,
    },
    tollPass: {
      id: 15,
      availability: false,
    },
    heatedSeat: {
      id: 16,
      availability: false,
    },
    sunRoof: {
      id: 17,
      availability: false,
    },
    wheelDriver: {
      id: 18,
      availability: false,
    },
    GPS: {
      id: 19,
      availability: false,
    },
    auxInput2: {
      id: 14,
      availability: false,
    },
  },
};

const featuresSlice = createSlice({
  name: "features",

  initialState,

  reducers: {
    addFeatures: (state, action) => {
      state.featuresList = action.payload;
    },
    addFeulType: (state, action) => {
      // debugger;
      state.mandatoryFeatures.fueltype = action.payload;
    },
    addKmpl: (state, action) => {
      state.mandatoryFeatures.kmpl = action.payload;
    },
    addDoors: (state, action) => {
      state.mandatoryFeatures.doors = action.payload;
    },
    addSeats: (state, action) => {
      state.mandatoryFeatures.seats = action.payload;
    },
  },
});

export const { addFeatures, addDoors, addFeulType, addKmpl, addSeats } =
  featuresSlice.actions;
export default featuresSlice.reducer;

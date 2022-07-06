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



  },
};


const featuresSlice = createSlice({
  name: "features",

  initialState,

  reducers: {
    addFeatures: (state, action) => {
      state.featuresList.push(action.payload);
      const changeIt = [...new Set(state.featuresList)]
      changeIt.map((item) => { state.featuresList.push(item) })

    },
    addFeulType: (state, action) => {
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

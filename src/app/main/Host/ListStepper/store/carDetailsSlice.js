import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  make: "nomi",
  category: "",
  model: "",
  chasisNumber: "",
  plateNumber: "",
  Transmission: "",
  type: "",
  ecoFriendly: "",
  description: "",
};

const carDetailsSlice = createSlice({
  name: "carDetails",

  initialState,

  reducers: {
    addCarDetails: (state, action) => {
      state.make = action.payload.make;
      state.category = action.payload.category;
      state.model = action.payload.model;
      state.chasisNumber = action.payload.chasisNumber;
      state.plateNumber = action.payload.plateNumber;
      state.Transmission = action.payload.Transmission;
      state.type = action.payload.type;
      state.ecoFriendly = action.payload.ecoFriendly;
      state.description = action.payload.description;
    },
  },
});

export const { addCarDetails } = carDetailsSlice.actions;
export default carDetailsSlice.reducer;

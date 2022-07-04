import { createSlice } from "@reduxjs/toolkit";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
  feulType: "",
  kmpl: "",
  doors: "",
  seats: "",
  features: [],
};

const featuresSlice = createSlice({
  name: "features",

  initialState,

  reducers: {
    addFeatures: (state, action) => {
      state.feulType = action.payload.feulType;
      state.kmpl = action.payload.kmpl;
      state.doors = action.payload.doors;
      state.seats = action.payload.seats;
      state.features = action.payload.features;
    },
  },
});

export const { addfeatures } = featuresSlice.actions;
export default featuresSlice.reducer;

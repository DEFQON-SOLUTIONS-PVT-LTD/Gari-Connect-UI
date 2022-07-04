import { createSlice } from "@reduxjs/toolkit";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
  pricePerDay: 0,
  driverPrice: 0,
  pickUpAndDropOffPrice: 0,
  totalPrice: 0,
};

const priceSlice = createSlice({
  name: "price",

  initialState,

  reducers: {
    addPrice: (state, action) => {
      state.pricePerDay = action.payload.pricePerDay;
      state.driverPrice = action.payload.driverPrice;
      state.pickUpAndDropOffPrice = action.payload.pickUpAndDropOffPrice;
      state.totalPrice = action.payload.totalPrice;
    },
  },
});

export const { addprice } = priceSlice.actions;
export default priceSlice.reducer;

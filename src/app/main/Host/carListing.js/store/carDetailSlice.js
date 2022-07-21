import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: 0 };

const carDetailSlice = createSlice({
  name: "allCars",

  initialState,

  reducers: {
    addCarsDetail: (state, action) => {
      state.data = action.payload;
      //   console.log(state);
      // debugger;
    },
  },
});

export const { addCarsDetail } = carDetailSlice.actions;
export default carDetailSlice.reducer;

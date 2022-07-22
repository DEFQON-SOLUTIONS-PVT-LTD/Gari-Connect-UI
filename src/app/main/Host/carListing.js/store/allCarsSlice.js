import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: 0 };

const allCarsSlice = createSlice({
  name: "allCars",

  initialState,

  reducers: {
    addCars: (state, action) => {
      state.data = action.payload;
      //   console.log(state);
      //   debugger;
    },
  },
});

export const { addCars } = allCarsSlice.actions;
export default allCarsSlice.reducer;

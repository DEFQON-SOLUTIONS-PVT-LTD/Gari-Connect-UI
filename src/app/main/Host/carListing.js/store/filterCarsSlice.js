import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: 0 };

const filterCarsSlice = createSlice({
  name: "allCars",

  initialState,

  reducers: {
    addFilteredCars: (state, action) => {
      state.data = action.payload;
      //   console.log(state);
      //   debugger;
    },
  },
});

export const { addFilteredCars } = filterCarsSlice.actions;
export default filterCarsSlice.reducer;

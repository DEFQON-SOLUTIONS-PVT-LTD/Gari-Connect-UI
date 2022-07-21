import { createSlice } from "@reduxjs/toolkit";

const initialState = { data: 0 };

const searchDataSlice = createSlice({
  name: "allCars",

  initialState,

  reducers: {
    addSearchDetails: (state, action) => {
      state.data = action.payload;
      //   console.log(state);
      debugger;
    },
  },
});

export const { addSearchDetails } = searchDataSlice.actions;
export default searchDataSlice.reducer;

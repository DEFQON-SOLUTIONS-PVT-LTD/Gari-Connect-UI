import { createSlice } from "@reduxjs/toolkit";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
  images: [],
};

const imagesSlice = createSlice({
  name: "images",

  initialState,

  reducers: {
    addImages: (state, action) => {
      state.images = action.payload.images;
    },
  },
});

export const { addimages } = imagesSlice.actions;
export default imagesSlice.reducer;

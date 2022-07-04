import { createSlice } from "@reduxjs/toolkit";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

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

// const getCarModel = createAsyncThunk(  'cardDetails/getCarModels'  ,   ()=>{
//     return
//             axios
//             .get('https://jsonplaceholder.typicode.com/todos/1')
//             .then(response => response.data.map(data =>user.)

// }      )

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

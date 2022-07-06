import { createSlice } from "@reduxjs/toolkit";
// import { createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

const initialState = {
  makeId: "nomi",
  categoryId: "",
  modelId: "",
  chassis_number: "",
  plate_number: "",
  transmissionId: "",
  vehicle_type_id: "",
  eco_friendly_Id: "",
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
    addMakeId: (state, action) => {
      state.make = action.payload;
    },
    addCategoryId: (state, action) => {
      state.categoryId = action.payload;
    },
    addModelId: (state, action) => {
      state.modelId = action.payload;
    },
    addChassisNumber: (state, action) => {
      state.chassis_number = action.payload;
    },
    addPlateNumber: (state, action) => {
      state.plate_number = action.payload;
    },
    addTransmissionId: (state, action) => {
      state.transmissionId = action.payload;
    },
    addVehicleTypeId: (state, action) => {
      state.vehicle_type_id = action.payload;
    },
    addEcoFriendlyId: (state, action) => {
      state.eco_friendly_Id = action.payload;
    },
    addDescription: (state, action) => {
      state.description = action.payload;
    },
  },
});

export const {
  addCategoryId,
  addDescription,
  addChassisNumber,
  addEcoFriendlyId,
  addMakeId,
  addModelId,
  addPlateNumber,
  addTransmissionId,
  addVehicleTypeId,
} = carDetailsSlice.actions;
export default carDetailsSlice.reducer;

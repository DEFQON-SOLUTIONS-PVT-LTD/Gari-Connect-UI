import { combineReducers } from "@reduxjs/toolkit";
import CarsListingSlice from "./CarsListingSlice";
import allCarsSlice from "./allCarsSlice";
import allCarsDetailSlice from "./carDetailSlice";
import filterCarsSlice from "./filterCarsSlice";

export default combineReducers({
  CarsListingSlice,
  allCarsSlice,
  allCarsDetailSlice,
  filterCarsSlice,
});

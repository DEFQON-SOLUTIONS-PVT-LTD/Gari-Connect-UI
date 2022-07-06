import { configureStore } from "@reduxjs/toolkit";
import carDetail from "./carDetailsSlice";
import location from "./locationSlice";
import features from "./featuresSlice";
import guidelines from "./guidelinesSice";
import setAvailability from "./setAvailabilitySlice";
import vehicleimages from "./addImageSlices";
import setPrice from "./setPricesSlice";

export default configureStore({
  reducer: {
    carDetail,
    location,
    features,
    guidelines,
    setAvailability,
    vehicleimages,
    setPrice,
  },
});

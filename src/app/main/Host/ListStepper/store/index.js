import { configureStore } from "@reduxjs/toolkit";
import carDetails from "./carDetailsSlice";
import location from "./locationSlice";
import features from "./featuresSlice";
import guidelines from "./guidelinesSice";
import availabilities from "./setAvailabilitySlice";
import images from "./addImageSlices";
import price from "./setPricesSlice";

export default configureStore({
  reducer: {
    carDetails,
    location,
    features,
    guidelines,
    availabilities,
    images,
    price,
  },
});

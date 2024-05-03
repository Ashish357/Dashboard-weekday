import { configureStore } from "@reduxjs/toolkit";
// import jobReducer from "./jobsSlice";
import {jobsSlice} from "./jobsSlice";
import filterReducer from "./filterSlice"

const appStore = configureStore({
  reducer: {
    // jobs: jobReducer,
    jobs: jobsSlice.reducer,
    filters: filterReducer
  },
});

export default appStore;
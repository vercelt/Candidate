import { configureStore } from "@reduxjs/toolkit";
import sideBarReducer from "./reducers/sideBarReducer";

const store = configureStore({
  reducer: {
    sidebar: sideBarReducer,
  },
});
export default store;

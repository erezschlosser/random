import { configureStore } from "@reduxjs/toolkit";
import gifReducer from "./gifSlice";

const store = configureStore({
  reducer: {
    gifs: gifReducer, // Adding the GIF slice to the store
  },
});

export default store;
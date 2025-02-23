import { configureStore } from "@reduxjs/toolkit";
import gifReducer from "./gifSlice";
import dogReducer from "./dogSlice";

const store = configureStore({
  reducer: {
    gifs: gifReducer, 
    dogs: dogReducer, 
  },
});

export default store;
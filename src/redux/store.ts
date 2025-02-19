import { configureStore } from "@reduxjs/toolkit";
import destinationsReducer from "./destinationsSlider";
import colorsReducer from "./colorsSlider";

const store = configureStore({
  reducer: {
    destinations: destinationsReducer,
    colors: colorsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

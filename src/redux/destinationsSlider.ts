import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { LocationItem } from "../interfaces/codinatesResult";

const destinationsSlice = createSlice({
  name: "destinations",
  initialState: [] as LocationItem[],
  reducers: {
    addLocation: (state, action: PayloadAction<LocationItem>) => {
      state.push(action.payload);
    },
    removeLocation: (state, action: PayloadAction<string>) => {
      return state.filter((item) => item.id !== action.payload);
    },
  },
});

export const { addLocation, removeLocation } = destinationsSlice.actions;

export default destinationsSlice.reducer;

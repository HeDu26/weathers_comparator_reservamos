import { createSlice } from "@reduxjs/toolkit";

interface ColorsState {
  colorIndex: number;
}

const initialState: ColorsState = {
  colorIndex: 0,
};

const colorsSlice = createSlice({
  name: "colors",
  initialState,
  reducers: {
    incrementColorIndex: (state) => {
      state.colorIndex = (state.colorIndex + 1) % 5;
    },
    decrementColorIndex: (state) => {
      state.colorIndex = (state.colorIndex - 1 + 5) % 5;
    },
    resetColorIndex: (state) => {
      state.colorIndex = 0;
    },
  },
});

export const { incrementColorIndex, decrementColorIndex, resetColorIndex } =
  colorsSlice.actions;
export default colorsSlice.reducer;

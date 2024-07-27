import { initialState } from "./initialState";
import { createSlice } from "@reduxjs/toolkit";

export const MainSlice = createSlice({
  name: "MAIN_SLICE",
  initialState: initialState,

  reducers: {

  }
});

export const Data = MainSlice.reducer;
// export const {plus,minus} = MainSlice.actions;
export const {} = MainSlice.actions;


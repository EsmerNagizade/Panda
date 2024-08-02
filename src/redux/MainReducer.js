import { initialState } from "./initialState";
import { createSlice } from "@reduxjs/toolkit";

export const MainSlice = createSlice({
  name: "MAIN_SLICE",
  initialState: initialState,

  reducers: {
    getContactFunk:(state,action)=>{
      state.Contact=action.payload
    },

    getBannerFunk:(state,action)=>{
      state.Banner=action.payload
    }

  }
});

export const Data = MainSlice.reducer;
// export const {plus,minus} = MainSlice.actions;
export const {getContactFunk,getBannerFunk} = MainSlice.actions;


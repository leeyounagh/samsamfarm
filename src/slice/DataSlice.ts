import { createSlice } from "@reduxjs/toolkit";
import { DataType } from "../types";

const initialState: DataType[] = [
  {
    time: "10시40분",
    temperature: "24.8",
    humid: "37.0",
    moisture: "100.0",
    bright: 100,
    id: 1,
  },
];

export const DataSlice = createSlice({
  name: "data",
  initialState, //초기값
  reducers: {
    setData: (state, action) => {
      return state.concat(action.payload);
    },
  },
});

export const { setData } = DataSlice.actions;

export default DataSlice.reducer;

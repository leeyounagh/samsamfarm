import { createSlice } from "@reduxjs/toolkit";
import { DataType } from "../types";

const initialState: DataType[] = [
  {
    time: "10:40",
    data: {
      temperature: "24.8",
      humid: "37.0",
      moisture: "100.0",
      bright: 100,
      id: 1,
    },
  },
];

export const DataSlice = createSlice({
  name: "data",
  initialState, //초기값
  reducers: {
    setData: (state, action) => {
      state = [action.payload, ...state];
      if (state.length > 10) {
        state.pop(); // 마지막 인덱스 제거
      }
    },
  },
});

export const { setData } = DataSlice.actions;

export default DataSlice.reducer;

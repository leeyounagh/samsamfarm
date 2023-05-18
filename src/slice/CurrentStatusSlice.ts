import { createSlice } from "@reduxjs/toolkit";

const initialState = 0;
export const CurrentStatusSlice = createSlice({
  name: "currentstatus",
  initialState, //초기값
  reducers: {
    setStatus: (_state, action) => {
      return action.payload;
    },
  },
});

export const { setStatus } = CurrentStatusSlice.actions;

export default CurrentStatusSlice.reducer;

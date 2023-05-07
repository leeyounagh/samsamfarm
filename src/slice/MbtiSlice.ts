import { createSlice } from "@reduxjs/toolkit";

const initialState: { mbti: string } = {
  mbti: "ESFP",
};

export const MbtiSlice = createSlice({
  name: "community",
  initialState,
  reducers: {
    setMbti: (state, action) => {
      state.mbti = action.payload;
    },
  },
});

export const { setMbti } = MbtiSlice.actions;

export default MbtiSlice.reducer;

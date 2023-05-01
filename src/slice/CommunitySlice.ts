import { createSlice } from "@reduxjs/toolkit";
import { CommunityType } from "../type/type";

const initialState: CommunityType[] | any = {
  list: [],
};
export const CommunityDataSlice = createSlice({
  name: "community",
  initialState,
  reducers: {
    setCommunityList: (state, action) => {
      state.list = action.payload;
    },
  },
});

export const { setCommunityList } = CommunityDataSlice.actions;
export default CommunityDataSlice.reducer;

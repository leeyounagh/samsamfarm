import { createSlice } from "@reduxjs/toolkit";
import { CommunityType } from "../type/type";

const initialState: CommunityType[] = [
  {
    title: "test",
    content: "test contents",
    writer: "test writer",
    user_id: 1234,
  },
];

export const CommunityDataSlice = createSlice({
  name: "community",
  initialState,
  reducers: {
    setCommunityList: (_state, action) => {
      return action.payload;
    },
  },
});

export const { setCommunityList } = CommunityDataSlice.actions;

export default CommunityDataSlice.reducer;

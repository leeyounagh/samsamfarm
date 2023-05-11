import { createSlice } from "@reduxjs/toolkit";
import { CommunityType } from "../types/type";

const initialState: CommunityType[] = [
  {
    id: 0,
    title: "test",
    content: "test contents",
    writer: "test writer",
    date: "2023-05-09",
    created_at: "2023-05-09",
    updated_at: "2023-05-09",
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

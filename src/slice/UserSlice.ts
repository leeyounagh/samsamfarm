import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "../types";

const initialState: UserType[] = [
  {
    id: 17,
    email: "test@gmail.com",
    iat: 1683982139,
    exp: 1684025339,
    iss: "samsamfarm",
  },
];

export const UserSlice = createSlice({
  name: "User",
  initialState, //초기값
  reducers: {
    setUser: (_state, action) => {
      return [action.payload];
    },
  },
});

export const { setUser } = UserSlice.actions;

export default UserSlice.reducer;

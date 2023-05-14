import { createSlice } from "@reduxjs/toolkit";
import { UserType } from "../types";

const initialState: UserType[] = [
  {
    id: 0,
    email: "",
    iat: 0,
    exp: 0,
    iss: "",
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

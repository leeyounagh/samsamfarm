import { configureStore } from "@reduxjs/toolkit";
import CommunityReducer from "../slice/CommunitySlice";
import UserReducer from "../slice/UserSlice";

const rootReducer = configureStore({
  reducer: {
    community: CommunityReducer,
    User: UserReducer,
  },
});
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer.getState>;

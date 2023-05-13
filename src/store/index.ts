import { configureStore } from "@reduxjs/toolkit";
import CommunityReducer from "../slice/CommunitySlice";
import MbtiReducer from "../slice/MbtiSlice";
import UserReducer from "../slice/UserSlice";

const rootReducer = configureStore({
  reducer: {
    community: CommunityReducer,
    mbti: MbtiReducer,
    User: UserReducer,
  },
});
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer.getState>;

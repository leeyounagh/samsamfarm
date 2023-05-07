import { configureStore } from "@reduxjs/toolkit";
import CommunityReducer from "../slice/CommunitySlice";
import MbtiReducer from "../slice/MbtiSlice";

const rootReducer = configureStore({
  reducer: { community: CommunityReducer, mbti: MbtiReducer },
});
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer.getState>;

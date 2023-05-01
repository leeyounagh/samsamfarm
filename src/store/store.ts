import { configureStore } from "@reduxjs/toolkit";
import CommunityData from "../slice/CommunitySlice";

const rootReducer = configureStore({
  reducer: { CommunityData },
});
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer.getState>;

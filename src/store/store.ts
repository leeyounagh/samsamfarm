import { configureStore } from "@reduxjs/toolkit";
import CommunityReducer from "../slice/CommunitySlice";

const rootReducer = configureStore({
  reducer: { community: CommunityReducer },
});
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer.getState>;

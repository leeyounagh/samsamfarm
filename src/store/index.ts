import { configureStore } from "@reduxjs/toolkit";

const rootReducer = configureStore({
  reducer: {},
});
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer.getState>;

import { configureStore } from "@reduxjs/toolkit";
import DataReducer from "../slice/DataSlice";
import StatusReducer from "../slice/CurrentStatusSlice";

const rootReducer = configureStore({
  reducer: {
    data: DataReducer,
    status: StatusReducer,
  },
});
export default rootReducer;

export type RootState = ReturnType<typeof rootReducer.getState>;

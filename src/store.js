import { configureStore } from "@reduxjs/toolkit";
import taskReducer from "./redux/reducers/task.reducers";

export default configureStore({
  reducer: {
    taskReducer,
  },
});

import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";

import { useDispatch } from "react-redux";
import { managerCategoryReducer } from "./managerCategory.services/slice";
import { managerServiceReducer } from "./managerService.services/slice";
import { managerDoctorReducer } from "./managerDoctor.services/slice";
export const store = configureStore({
  reducer: {
    managerDoctor: managerDoctorReducer,
    managerCategory: managerCategoryReducer,
    managerService: managerServiceReducer,
  },
  middleware: getDefaultMiddleware({
    serializableCheck: false, // Tắt kiểm tra tuần tự hóa
  }),
});
// store.dispatch(managerAccountAction.getUser);
export type RootState = ReturnType<(typeof store)["getState"]>;
export type AppDispatch = (typeof store)["dispatch"];
export const useAppDispatch: () => AppDispatch = useDispatch;

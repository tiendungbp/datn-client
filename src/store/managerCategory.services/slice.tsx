import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getAllCategory } from "../../services/managerCategory";
import { getAllCategoryStore } from "./thunkAction";
// import { toast } from "react-toastify"

type managerbookingRoomInitialState = {
  listCategory?: getAllCategory[];
  isLoadingBookingRoom: boolean;
};
const initialState: managerbookingRoomInitialState = {
  isLoadingBookingRoom: false,
};
export const {
  reducer: managerCategoryReducer,
  actions: managerCategoryAction,
} = createSlice({
  name: "managerCategory",
  initialState,
  reducers: {
    acLoader: () => {},
  },
  extraReducers: (builder) => {
    builder.addCase(getAllCategoryStore.fulfilled, (state, action) => {
      console.log(action.payload.data);
      if (action.payload.status === 200) {
        state.listCategory = action.payload.data.data;
      }
    });
    // .addCase(createDoctorStore.fulfilled, (state, action) => {
    //   if (action.payload.status === 200) {
    //     state.listDoctor = action.payload.data;
    //   }
    // });
  },
});

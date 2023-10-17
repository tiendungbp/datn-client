import { createSlice } from "@reduxjs/toolkit";
import { createDoctorStore, getAllDoctorStore } from "./thunkAction";
import { toast } from "react-toastify";
import { getAllDoctor } from "../../services/managerDoctor";
// import { toast } from "react-toastify"

type managerbookingRoomInitialState = {
  listDoctor?: getAllDoctor[];
  isLoadingBookingRoom: boolean;
};
const initialState: managerbookingRoomInitialState = {
  isLoadingBookingRoom: false,
};
export const { reducer: managerDoctorReducer, actions: managerDoctorAction } =
  createSlice({
    name: "managerDoctor",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getAllDoctorStore.fulfilled, (state, action) => {
          if (action.payload.status === 200) {
            state.listDoctor = action.payload.data.data;
          }
        })
        .addCase(createDoctorStore.fulfilled, (state, action) => {
          if (action.payload.status === 200) {
            state.listDoctor = action.payload.data;
          }
        });
    },
  });

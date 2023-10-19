import { createSlice } from "@reduxjs/toolkit";
import {
  createDoctorStore,
  getAllDoctorStore,
  getOneDoctorStore,
} from "./thunkAction";
import { toast } from "react-toastify";
import { getAllDoctor } from "../../services/managerDoctor";
// import { toast } from "react-toastify"

type managerbookingRoomInitialState = {
  listDoctor?: getAllDoctor[];
  doctor?: getAllDoctor | null;
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
        .addCase(getOneDoctorStore.fulfilled, (state, action) => {
          if (action.payload.status === 200) {
            state.doctor = action.payload.data.data;
          }
        })
        .addCase(createDoctorStore.fulfilled, (state, action) => {
          if (action.payload.status === 200) {
            state.listDoctor = action.payload.data;
          }
        });
    },
  });

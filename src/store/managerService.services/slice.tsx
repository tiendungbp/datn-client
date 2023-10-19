import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getAllDoctor } from "../../services/managerDoctor";
import { getAllService } from "../../services/managerService";
import { getAllServiceStore, getOneServiceStore } from "./thunkAction";
// import { toast } from "react-toastify"

type managerbookingRoomInitialState = {
  listService?: getAllService[];
  service?: getAllService[];
  isLoadingBookingRoom: boolean;
};
const initialState: managerbookingRoomInitialState = {
  isLoadingBookingRoom: false,
};
export const { reducer: managerServiceReducer, actions: managerServiceAction } =
  createSlice({
    name: "managerService",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
      builder
        .addCase(getAllServiceStore.fulfilled, (state, action) => {
          if (action.payload.status === 200) {
            state.listService = action.payload.data.data;
          }
        })
        .addCase(getOneServiceStore.fulfilled, (state, action) => {
          console.log("service from slice: ", action.payload.data);
          if (action.payload.status === 200) {
            state.service = action.payload.data.data;
          }
        });
    },
  });

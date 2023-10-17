import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";
import { getAllDoctor } from "../../services/managerDoctor";
import { getAllService } from "../../services/managerService";
import { getAllServiceStore } from "./thunkAction";
// import { toast } from "react-toastify"

type managerbookingRoomInitialState = {
  listService?: getAllService[];
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
      builder.addCase(getAllServiceStore.fulfilled, (state, action) => {
        if (action.payload.status === 200) {
          state.listService = action.payload.data.data;
        }
      });
    },
  });

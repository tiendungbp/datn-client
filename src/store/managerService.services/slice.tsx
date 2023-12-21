import { createSlice } from "@reduxjs/toolkit";
import { getAllService } from "../../services/managerService";
import { getAllServiceStore, getOneServiceStore } from "./thunkAction";

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
          if (action.payload.status === 200) {
            state.service = action.payload.data.data;
          }
        });
    },
  });

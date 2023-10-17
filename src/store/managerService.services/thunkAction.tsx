import { createAsyncThunk } from "@reduxjs/toolkit";
import { managerServiceServices } from "../../services/managerService";
export const getAllServiceStore = createAsyncThunk(
  "Toohhive/getAllService",
  async (_, { rejectWithValue }) => {
    try {
      const res = await managerServiceServices.getAllService();
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
// export const createDoctorStore = createAsyncThunk(
//   "Toohhive/createDoctor",
//   async (payload: getAllDoctor, { rejectWithValue }) => {
//     try {
//       const res = await managerDoctorServices.createDoctor(payload);
//       return res;
//     } catch (error) {
//       return rejectWithValue(error);
//     }
//   }
// );

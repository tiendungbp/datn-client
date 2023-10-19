import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllCategory,
  managerCategoryServices,
} from "../../services/managerCategory";
export const getAllCategoryStore = createAsyncThunk(
  "Toohhive/getAllCategory",
  async (_, { rejectWithValue }) => {
    try {
      const res = await managerCategoryServices.getAllCategory();
      // console.log(res);

      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const getOneCategoryStore = createAsyncThunk(
  "Toohhive/getOneCategory",
  async (idCategory: getAllCategory["category_id"], { rejectWithValue }) => {
    try {
      const res = await managerCategoryServices.getOneCategory(idCategory);
      // console.log(res);

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

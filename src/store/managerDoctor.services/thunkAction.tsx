import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  getAllDoctor,
  managerDoctorServices,
} from "../../services/managerDoctor";
export const getAllDoctorStore = createAsyncThunk(
  "Toohhive/getAllDoctor",
  async (_, { rejectWithValue }) => {
    try {
      const res = await managerDoctorServices.getAllDoctor();
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const getOneDoctorStore = createAsyncThunk(
  "Toohhive/getOneDoctor",
  async (idDoctor: getAllDoctor["doctor_id"], { rejectWithValue }) => {
    try {
      const res = await managerDoctorServices.getOneDoctor(idDoctor);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);
export const createDoctorStore = createAsyncThunk(
  "Toohhive/createDoctor",
  async (payload: getAllDoctor, { rejectWithValue }) => {
    try {
      const res = await managerDoctorServices.createDoctor(payload);
      return res;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

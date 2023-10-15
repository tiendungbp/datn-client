import { createAsyncThunk } from "@reduxjs/toolkit";
import { getAllDoctor, managerDoctorServices } from "../../services/managerDoctor";
export const getAllDoctorStore = createAsyncThunk(
    "Toohhive/getALlDoctor",
    async (_, { rejectWithValue }) => {
        try {
            const res = await managerDoctorServices.getAllDoctor()
            return res
        } catch (error) {
            return rejectWithValue(error)
        }
    }
)


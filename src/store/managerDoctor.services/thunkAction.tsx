import { createAsyncThunk } from '@reduxjs/toolkit';
import {
	getAllDoctor,
	managerDoctorServices,
} from '../../services/managerDoctor';
export const getAllDoctorStore = createAsyncThunk(
	'Toohhive/getAllDoctorStore',
	async (_, { rejectWithValue }) => {
		try {
			const res = await managerDoctorServices.getAllDoctor();
			return res;
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);
export const getOneDoctorStore = createAsyncThunk(
	'Toohhive/getOneDoctor',
	async (idDoctor: getAllDoctor['doctor_id'], { rejectWithValue }) => {
		try {
			const res = await managerDoctorServices.getOneDoctor(idDoctor);
			return res;
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

export const getAllDoctorService = createAsyncThunk(
	'Toohhive/getAllDoctor',
	async (_, { rejectWithValue }) => {
		try {
			const res = await managerDoctorServices.getAllDoctor();
			return res;
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);
export const getAllDoctorByCategoryService = createAsyncThunk(
	'Toohhive/getAllDoctorByCategory',
	async (id: string, { rejectWithValue }) => {
		try {
			const res = await managerDoctorServices.getAllByCategoryID(id);
			return res;
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

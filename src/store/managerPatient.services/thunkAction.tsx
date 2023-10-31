import { createAsyncThunk } from '@reduxjs/toolkit';
import patientAPI from '../../services/managerPatient';
import dayjs from 'dayjs';
type valuePatient = {
	patient_id: string;
	fullname: string | null;
	avatar: string | null | undefined;
	dob: dayjs.Dayjs | null;
	gender: boolean | null;
	phone: string | null;
	street: string | null | null;
	ward: string | null;
	district: string | null;
	city: string | null;
};

export const getDetailPatientService = createAsyncThunk(
	'Toohhive/getDetailPatient',
	async (patient_id: any, { rejectWithValue }) => {
		try {
			const res = await patientAPI.getByID(patient_id);
			return res;
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);
export const updatePatientService = createAsyncThunk(
	'Toohhive/updatePatient',
	async (
		data: { obj: valuePatient; patient_id: string },
		{ rejectWithValue },
	) => {
		const { obj, patient_id } = data;
		try {
			const res = await patientAPI.updateProfile(obj, patient_id);
			return res;
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

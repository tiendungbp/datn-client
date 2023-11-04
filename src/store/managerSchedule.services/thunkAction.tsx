import { createAsyncThunk } from '@reduxjs/toolkit';
import scheduleAPI from '../../services/managerSchedule';

export const getScheduleByDoctorService = createAsyncThunk(
	'Toohhive/getScheduleByDoctor',
	async (data:{doctor_id:string;date:string}, { rejectWithValue }) => {
		try {
			const res = await scheduleAPI.getDoctorSchedulesByDate(data.doctor_id,data.date);
			return res;
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);
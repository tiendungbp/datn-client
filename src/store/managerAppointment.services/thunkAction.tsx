import { createAsyncThunk } from '@reduxjs/toolkit';
import appointmentAPI from '../../services/managerAppointment';

type Appointment = {
		creator_id: string; 
		type_id: number;
		doctor_schedule_id: string; 
		patient_id: string; 
		fullname: string; 
		dob: Date; 
		gender: number; 
		phone: string; 
}
export const getAllAppointmentService = createAsyncThunk(
	'Toohhive/getAllAppointment',
	async (patient_id: string, { rejectWithValue }) => {
		try {
			const res = await appointmentAPI.getAll(patient_id);
			return res;
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);
export const cancelAppointmentService = createAsyncThunk(
	'Toohhive/cancelAppointment',
	async (obj: any, { rejectWithValue }) => {
		try {
			const res = await appointmentAPI.cancel(obj);
			return res;
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);
export const getDetailAppointmentService = createAsyncThunk(
	'Toohhive/getDetailAppointment',
	async (data:{appointment_id:string;user_id:string}, { rejectWithValue }) => {
		try {
			const res = await appointmentAPI.getByID(data.appointment_id,data.user_id);
			return res;
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);
export const bookingAppointmentService = createAsyncThunk(
	'Toohhive/bookingAppointment',
	async (obj:Appointment, { rejectWithValue }) => {
		try {
			const res = await appointmentAPI.booking(obj);
			return res;
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);
import { createAsyncThunk } from '@reduxjs/toolkit';
import authAPI from '../../services/managerAuth';
type valueAuth = {
	username?: string;
	password?: string;
};
type registerValue={
	fullname: string;
  dob: Date; 
  gender: boolean; 
  phone: string;
  email: string;
  password: string;
}
export const loginService = createAsyncThunk(
	'Toohhive/login',
	async (value: valueAuth, { rejectWithValue }) => {
		try {
			const res = await authAPI.login(value);
			return res;
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);
export const registerService = createAsyncThunk(
	'Toohhive/register',
	async (value: registerValue, { rejectWithValue }) => {
		try {
			const res = await authAPI.register(value);
			return res;
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);
export const changeEmailService = createAsyncThunk(
	'Toohhive/changeEmail',
	async (
		data: { new_email:string;password:string; patient_id: string },
		{ rejectWithValue },
	) => {
		try {
			const obj = {
        new_email: data.new_email,
        password: data.password,
      };
			const res = await authAPI.changeEmail(obj, data.patient_id);
			return res;
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);
export const changePasswordService = createAsyncThunk(
	'Toohhive/changePassword',
	async (data: { current_password:string;new_password:string; patient_id: string }, { rejectWithValue }) => {
		try {
			const obj = {
        current_password: data.current_password,
        new_password: data.new_password,
      };
			const res = await authAPI.changePassword(obj, data.patient_id);
			return res;
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

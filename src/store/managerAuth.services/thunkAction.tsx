import { createAsyncThunk } from '@reduxjs/toolkit';
import authAPI from '../../services/managerAuth';
type valueAuth = {
	username?: string;
	password?: string;
};

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
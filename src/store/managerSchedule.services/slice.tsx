import { createSlice } from '@reduxjs/toolkit';
import { getScheduleByDoctorService } from './thunkAction';

type scheduleInitialState = {
	isLoadingSchedule: boolean;
	messageSchedule: any;
};
const initialState: scheduleInitialState = {
	isLoadingSchedule: false,
	messageSchedule: '',
};
export const { reducer: scheduleReducer, actions: scheduleAction } =
	createSlice({
		name: 'schedule',
		initialState,
		reducers: {
			clearMessageSchedule: (state) => {
				state.messageSchedule = null;
			},
		},
		extraReducers: (builder) => {
			builder
				.addCase(getScheduleByDoctorService.pending, (state, action) => {
					state.isLoadingSchedule = true;
				})
				.addCase(getScheduleByDoctorService.fulfilled, (state, action) => {
					if (action.payload) {
						state.isLoadingSchedule = false;
						state.messageSchedule = action.payload.data;
					}
				})
				
		},
	});
export const { clearMessageSchedule } = scheduleAction;

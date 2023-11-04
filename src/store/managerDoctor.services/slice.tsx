import { createSlice } from '@reduxjs/toolkit';
import {
	getAllDoctorByCategoryService,
	getAllDoctorService,
	getOneDoctorStore,
} from './thunkAction';
import { getAllDoctor } from '../../services/managerDoctor';

type doctorInitialState = {
	listDoctor: any;
	doctor?: getAllDoctor | null;
	isLoadingDoctor: boolean;
};
const initialState: doctorInitialState = {
	listDoctor: null,
	isLoadingDoctor: false,
	doctor: null,
};
export const { reducer: managerDoctorReducer, actions: managerDoctorAction } =
	createSlice({
		name: 'managerDoctor',
		initialState,
		reducers: {},
		extraReducers: (builder) => {
			builder
				.addCase(getAllDoctorService.pending, (state, action) => {
					state.isLoadingDoctor = true;
				})
				.addCase(getAllDoctorService.fulfilled, (state, action) => {
					if (action.payload) {
						state.isLoadingDoctor = false;
						state.listDoctor = action.payload.data;
					}
				})

				.addCase(getOneDoctorStore.pending, (state, action) => {
					state.isLoadingDoctor = true;
				})
				.addCase(getOneDoctorStore.fulfilled, (state, action) => {
					if (action.payload) {
						state.isLoadingDoctor = false;
						state.doctor = action.payload.data;
					}
				})
				.addCase(getAllDoctorByCategoryService.pending, (state, action) => {
					state.isLoadingDoctor = true;
				})
				.addCase(getAllDoctorByCategoryService.fulfilled, (state, action) => {
					if (action.payload) {
						state.isLoadingDoctor = false;
						state.listDoctor = action.payload.data;
					}
				});
		},
	});

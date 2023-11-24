import { createSlice } from '@reduxjs/toolkit';
import {
	bookingAppointmentService,
	cancelAppointmentService,
	getAllAppointmentService,
	getDetailAppointmentService,
} from './thunkAction';

type appointmentInitialState = {
	isLoading: boolean;
	isLoadingAppointment: boolean;
	message: any;
	messageCancel: any;
	messageDetail: any;
	messageBooking: any;
};
const initialState: appointmentInitialState = {
	isLoadingAppointment: false,
	isLoading: false,
	message: '',
	messageCancel: '',
	messageDetail: '',
	messageBooking: '',
};
export const { reducer: appointmentReducer, actions: appointmentAction } =
	createSlice({
		name: 'appointment',
		initialState,
		reducers: {
			clearMessageAppointment: (state) => {
				state.message = null;
				state.messageCancel = null;
				state.messageDetail = null;
				state.messageBooking = null;
			},
		},
		extraReducers: (builder) => {
			builder
				.addCase(getAllAppointmentService.pending, (state, action) => {
					state.isLoading = true;
				})
				.addCase(getAllAppointmentService.fulfilled, (state, action) => {
					if (action.payload) {
						state.isLoading = false;
						state.message = action.payload.data;
					}
				})
				.addCase(cancelAppointmentService.pending, (state, action) => {
					state.isLoading = true;
				})
				.addCase(cancelAppointmentService.fulfilled, (state, action) => {
					if (action.payload) {
						state.isLoading = false;
						state.messageCancel = action.payload.data;
					}
				})
				.addCase(getDetailAppointmentService.pending, (state, action) => {
					state.isLoading = true;
				})
				.addCase(getDetailAppointmentService.fulfilled, (state, action) => {
					if (action.payload) {
						state.isLoading = false;
						state.messageDetail = action.payload.data;
					}
				})
				.addCase(bookingAppointmentService.pending, (state, action) => {
					state.isLoadingAppointment = true;
				})
				.addCase(bookingAppointmentService.fulfilled, (state, action) => {
					if (action.payload) {
						state.isLoadingAppointment = false;
						state.messageBooking = action.payload.data;
					}
				});
		},
	});
export const { clearMessageAppointment } = appointmentAction;

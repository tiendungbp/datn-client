import { createSlice } from '@reduxjs/toolkit';
import {
	ResetPasswordService,
	SendLinkResetPasswordService,
	changeEmailService,
	changePasswordService,
	loginService,
	registerService,
} from './thunkAction';
type authInitialState = {
	isLoading: boolean;
	message: any;
	messageRegister: any;
	messageAuthEmail: any;
	messageAuthPassword: any;
	messageForgot: any;
	messageReset: any;
	user: any;
	login: boolean;
};
const initialState: authInitialState = {
	isLoading: false,
	message: '',
	messageRegister: '',
	messageAuthEmail: '',
	messageAuthPassword: '',
	messageForgot: '',
	messageReset: '',
	user: null,
	login: false,
};
export const { reducer: authReducer, actions: authAction } = createSlice({
	name: 'auth',
	initialState,
	reducers: {
		clearMessageAuth: (state) => {
			state.messageAuthEmail = null;
			state.messageAuthPassword = null;
			state.message = null;
			state.messageRegister = null;
			state.messageForgot = null;
			state.messageReset = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(loginService.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(loginService.fulfilled, (state, action) => {
				if (action.payload) {
					state.isLoading = false;
					state.message = action.payload.data;
				}
			})
			.addCase(registerService.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(registerService.fulfilled, (state, action) => {
				if (action.payload) {
					state.isLoading = false;
					state.messageRegister = action.payload.data;
				}
			})
			.addCase(changeEmailService.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(changeEmailService.fulfilled, (state, action) => {
				state.isLoading = false;
				if (action.payload) {
					state.messageAuthEmail = action.payload.data;
				}
			})
			.addCase(changePasswordService.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(changePasswordService.fulfilled, (state, action) => {
				state.isLoading = false;
				if (action.payload) {
					state.messageAuthPassword = action.payload.data;
				}
			})
			.addCase(SendLinkResetPasswordService.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(SendLinkResetPasswordService.fulfilled, (state, action) => {
				state.isLoading = false;
				if (action.payload) {
					state.messageForgot = action.payload.data;
				}
			})
			.addCase(ResetPasswordService.pending, (state) => {
				state.isLoading = true;
			})
			.addCase(ResetPasswordService.fulfilled, (state, action) => {
				state.isLoading = false;
				if (action.payload) {
					state.messageReset = action.payload.data;
				}
			});
	},
});
export const { clearMessageAuth } = authAction;

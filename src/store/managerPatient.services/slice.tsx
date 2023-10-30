import { createSlice } from '@reduxjs/toolkit';
import { getDetailPatientService, updatePatientService } from './thunkAction';
type patientInitialState = {
	isLoading: boolean;
	message: any;
	messageUpdate: any;
};
const initialState: patientInitialState = {
	isLoading: false,
	message: '',
	messageUpdate: '',
};
export const { reducer: patientReducer, actions: patientAction } = createSlice({
	name: 'patient',
	initialState,
	reducers: {
		clearMessageUpdate: (state) => {
			state.messageUpdate = null;
		},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getDetailPatientService.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(getDetailPatientService.fulfilled, (state, action) => {
				if (action.payload) {
					state.isLoading = false;
					state.message = action.payload.data;
				}
			})
			.addCase(updatePatientService.pending, (state, action) => {
				state.isLoading = true;
			})
			.addCase(updatePatientService.fulfilled, (state, action) => {
				if (action.payload) {
					state.isLoading = false;
					state.messageUpdate = action.payload.data;
				}
			});
	},
});
export const { clearMessageUpdate } = patientAction;

import { createSlice } from '@reduxjs/toolkit';
import { getDetailPatientService, updatePatientService } from './thunkAction';
type patientInitialState = {
	isLoading: boolean;
	isLoadingPatient: boolean;
	message: any;
	messageUpdate: any;
	messagePatient:any;
};
const initialState: patientInitialState = {
	isLoadingPatient: false,
	isLoading: false,
	message: '',
	messageUpdate: '',
	messagePatient:''
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
				state.isLoadingPatient = true;
			})
			.addCase(getDetailPatientService.fulfilled, (state, action) => {
				if (action.payload) {
					state.isLoading = false;
					state.isLoadingPatient = false;
					state.message = action.payload.data;
					state.messagePatient = action.payload.data;
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

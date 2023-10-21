import { createSlice } from '@reduxjs/toolkit';
import { loginService } from './thunkAction';
// import authAPI from '../../services/managerAuth';
// import { toast } from "react-toastify"
type authInitialState = {
	isLoading: boolean;
	message: any;
};
const initialState: authInitialState = {
	isLoading: false,
	message: '',
};
export const { reducer: authReducer, actions: authAction } = createSlice({
	name: 'auth',
	initialState,
	reducers: {},
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
			});
	},
});

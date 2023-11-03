import { createSlice } from '@reduxjs/toolkit';
type userInitialState = {
	user: any;
	login: boolean;
};
const initialState: userInitialState = {
	user: null,
	login: false,
};
export const { reducer: userReducer, actions: userAction } = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setUserInfo(state, action) {
			state.user = action.payload.user;
			state.login = action.payload.login;
		},
	},
});
export const { setUserInfo } = userAction;

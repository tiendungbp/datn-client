import { createSlice } from '@reduxjs/toolkit';
import { getAllCategory } from '../../services/managerCategory';
import { getAllCategoryService, getAllCategoryStore, getOneCategoryStore } from './thunkAction';

type categoryInitialState = {
	listCategory?: getAllCategory[];
	listCategoryActive:any;
	category?: getAllCategory | null;
	isLoadingCategory: boolean;
};
const initialState: categoryInitialState = {
	isLoadingCategory: false,
	listCategoryActive:null,
};
export const {
	reducer: managerCategoryReducer,
	actions: managerCategoryAction,
} = createSlice({
	name: 'managerCategory',
	initialState,
	reducers: {
		acLoader: () => {},
	},
	extraReducers: (builder) => {
		builder
			.addCase(getAllCategoryService.pending, (state, action) => {
				state.isLoadingCategory = true;
			})
			.addCase(getAllCategoryService.fulfilled, (state, action) => {
				if (action.payload) {
					state.isLoadingCategory = false;
					state.listCategoryActive = action.payload.data;
				}
			})
			.addCase(getOneCategoryStore.fulfilled, (state, action) => {
				if (action.payload.status === 200) {
					state.category = action.payload.data.data;
				}
			})
			.addCase(getAllCategoryStore.fulfilled, (state, action) => {
				if (action.payload.status === 200) {
					state.listCategory = action.payload.data.data;
				}
			});
	},
});

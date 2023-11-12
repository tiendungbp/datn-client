import { createAsyncThunk } from '@reduxjs/toolkit';
import {
	getAllCategory,
	managerCategoryServices,
} from '../../services/managerCategory';
export const getAllCategoryService = createAsyncThunk(
	'Toohhive/getAllCategoryActive',
	async (_, { rejectWithValue }) => {
		try {
			const res = await managerCategoryServices.getActive();
			return res;
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);
export const getOneCategoryStore = createAsyncThunk(
	'Toohhive/getOneCategory',
	async (idCategory: getAllCategory['category_id'], { rejectWithValue }) => {
		try {
			const res = await managerCategoryServices.getOneCategory(idCategory);
			return res;
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

export const getAllCategoryStore = createAsyncThunk(
	'Toohhive/getAllCategory',
	async (_, { rejectWithValue }) => {
		try {
			const res = await managerCategoryServices.getAllCategory();
			return res;
		} catch (error) {
			return rejectWithValue(error);
		}
	},
);

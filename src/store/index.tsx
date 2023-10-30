import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useDispatch, useSelector } from 'react-redux';
import { managerCategoryReducer } from './managerCategory.services/slice';
import { managerServiceReducer } from './managerService.services/slice';
import { managerDoctorReducer } from './managerDoctor.services/slice';
import { authReducer } from './managerAuth.services/slice';
import autoMergeLevel2 from 'redux-persist/es/stateReconciler/autoMergeLevel2';
import storage from 'redux-persist/lib/storage';
import persistReducer from 'redux-persist/es/persistReducer';
import persistStore from 'redux-persist/es/persistStore';
import { userReducer } from './managerAuth.services/userSlice';
import { patientReducer } from './managerPatient.services/slice';
const rootReducer: any = combineReducers({
	managerDoctor: managerDoctorReducer,
	managerCategory: managerCategoryReducer,
	managerService: managerServiceReducer,
	auth: authReducer,
	user: userReducer,
	patient: patientReducer,
});

const persistConfig = {
	key: 'user',
	storage: storage,
	stateReconciler: autoMergeLevel2,
	whitelist: ['user'],
};
const persistedReducer = persistReducer(persistConfig, rootReducer);
export const store: any = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
			serializableCheck: false,
		}),
	preloadedState: {} as RootState,
});
// store.dispatch(managerAccountAction.getUser);
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export const persistor = persistStore(store);
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

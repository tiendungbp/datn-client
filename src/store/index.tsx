import { configureStore,getDefaultMiddleware } from '@reduxjs/toolkit'


export const store = configureStore({
    reducer: {
    
    },
    middleware: getDefaultMiddleware({
        serializableCheck: false, // Tắt kiểm tra tuần tự hóa
    }),
})

export type RootState = ReturnType<typeof store['getState']>
export type AppDispatch = typeof store['dispatch']

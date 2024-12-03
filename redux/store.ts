import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './api/baseApi'
import { cartReducer } from './slices/cartSlice'

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        cart: cartReducer
    },
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(baseApi.middleware)
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


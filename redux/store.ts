import { configureStore } from '@reduxjs/toolkit'
import { baseApi } from './api/baseApi'
import { cartReducer } from './slices/cartSlice'
import storage from 'redux-persist/lib/storage'
import { FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER, persistReducer, persistStore, Persistor } from 'redux-persist';

const persistConfig = {
    key: 'root',
    storage,
}

const persistedCartReducer = persistReducer(persistConfig, cartReducer)

export const store = configureStore({
    reducer: {
        [baseApi.reducerPath]: baseApi.reducer,
        cart: persistedCartReducer
    },
    middleware: (getDefaultMiddleWare) => getDefaultMiddleWare({
        serializableCheck: {
            ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        }
    }).concat(baseApi.middleware)
})

let persistor : Persistor;
if (typeof window !== 'undefined') {
    persistor = persistStore(store);
}

export { persistor };


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


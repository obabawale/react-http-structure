import { configureStore, combineReducers } from '@reduxjs/toolkit'
import {
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist';
import persistStore from 'redux-persist/es/persistStore';
import storage from 'redux-persist/lib/storage';
import authSlice from '../features/auth.slice';

// Can call `combineReducers` yourself if needed
const rootReducer = combineReducers({
    auth: authSlice
})

const persistConfig = {
    key: 'root',
    version: 1,
    storage,
    whitelist: ["user"]
}

const persistedReducer = persistReducer(persistConfig, rootReducer)

export const store = configureStore({
    // Pass previously created persisted reducer
    reducer: persistedReducer,
    middleware: getDefaultMiddleware => {
        const middleware = getDefaultMiddleware({
            // Customize the built-in serializability dev check
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER]
            }
        })

        return middleware
    },
    // Turn off devtools in prod, or pass options in dev
    devTools:
        import.meta.env.NODE_ENV === 'production'
            ? false
            : {
            }
})

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
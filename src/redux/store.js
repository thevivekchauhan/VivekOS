import { configureStore } from '@reduxjs/toolkit';
import documentsReducer from './slices/documentsSlice';

export const store = configureStore({
    reducer: {
        documents: documentsReducer,
    },
});
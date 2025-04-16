import { createSlice } from '@reduxjs/toolkit';

const documentsSlice = createSlice({
    name: 'documents',
    initialState: {
        savedDocs: []
    },
    reducers: {
        saveDocument: (state, action) => {
            state.savedDocs.push(action.payload);
        },
        deleteDocument: (state, action) => {
            state.savedDocs = state.savedDocs.filter(doc => doc.id !== action.payload);
        }
    }
});

export const { saveDocument, deleteDocument } = documentsSlice.actions;
export default documentsSlice.reducer;

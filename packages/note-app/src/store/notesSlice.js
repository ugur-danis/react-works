import { createSlice, nanoid } from '@reduxjs/toolkit';
import { useSelector } from 'react-redux';
import { getStoredNotes, updateStoredNotes } from '../utils';

export const notesSlice = createSlice({
    name: 'notes',
    initialState: {
        notes: getStoredNotes(),
        filterText: ''
    },
    reducers: {
        addNote: {
            reducer: (state, action) => {
                state.notes.push(action.payload);
                updateStoredNotes(state.notes);
            },
            prepare: note => ({
                payload: {
                    ...note,
                    id: nanoid()
                }
            })
        },
        removeNote: (state, action) => {
            state.notes = state.notes.filter(n => n.id !== action.payload.id);
            updateStoredNotes(state.notes);
        },
        setFilterText: (state, action) => {
            state.filterText = action.payload;
        }
    }
});

const { reducer, actions } = notesSlice;
export const { addNote, removeNote, setFilterText } = actions;
export const useNotes = () => useSelector(state => state.notes);
export default reducer;
import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  items: [],
  isLoading: false,
  error: null,
};

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    fetchContactsStart(state) {
      state.isLoading = true;
    },
    fetchContactsSuccess(state, action) {
      state.items = action.payload;
      state.isLoading = false;
    },
    fetchContactsError(state, action) {
      state.error = action.payload;
      state.isLoading = false;
    },
    addContact(state, action) {
      state.items.push(action.payload);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(contact => contact.id !== action.payload);
    },
  },
});

export const { fetchContactsStart, fetchContactsSuccess, fetchContactsError, addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;

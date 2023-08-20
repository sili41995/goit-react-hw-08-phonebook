import { createSelector } from '@reduxjs/toolkit';
import { selectFilter } from 'redux/filter/selectors';
import filteredContacts from 'utils/filteredContacts';

export const selectContacts = (state) => state.contacts.items;

export const selectError = (state) => state.contacts.error;

export const selectIsLoading = (state) => state.contacts.isLoading;

export const selectFilteredContacts = createSelector(
  [selectContacts, selectFilter],
  (contacts, filter) => filteredContacts(filter, contacts)
);

export const selectContacts = (state) => state.contacts.items;

export const selectError = (state) => state.contacts.error;

export const selectIsLoading = (state) => state.contacts.isLoading;

export const selectIsLoaded = (state) => state.contacts.isLoaded;

import { combineReducers } from '@reduxjs/toolkit';
import contactsReducer from './contacts/contactsSlice';

const rootReducer = combineReducers({
  contacts: contactsReducer,
});

export default rootReducer;

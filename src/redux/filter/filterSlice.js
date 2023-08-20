import { createSlice } from '@reduxjs/toolkit';
import initialState from 'redux/initialState';

const filterSlice = createSlice({
  name: 'filter',
  initialState: initialState.filter,
  reducers: {
    changeFilter: (_, { payload }) => payload,
  },
});

export const { changeFilter } = filterSlice.actions;

export default filterSlice.reducer;

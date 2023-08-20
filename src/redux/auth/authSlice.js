import { createSlice } from '@reduxjs/toolkit';
import initialState from 'redux/initialState';
import { loginUser, registerUser } from './operations';

const handlePending = (state) => ({ ...state, isLoading: true });

const authSlice = createSlice({
  name: 'auth',
  initialState: initialState.auth,
  extraReducers: (builder) => {
    builder
      .addCase(registerUser.pending, handlePending)
      .addCase(registerUser.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        user: { ...payload.user },
        token: payload.token,
        isLoggedIn: true,
      }))
      .addCase(registerUser.rejected, (state) => ({
        ...state,
        isLoading: false,
      }))
      .addCase(loginUser.pending, handlePending)
      .addCase(loginUser.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        user: { ...payload.user },
        token: payload.token,
        isLoggedIn: true,
      }))
      .addCase(loginUser.rejected, (state) => ({
        ...state,
        isLoading: false,
      }));
  },
});

export default authSlice.reducer;

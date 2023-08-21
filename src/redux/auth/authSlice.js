import { createSlice } from '@reduxjs/toolkit';
import initialState from 'redux/initialState';
import { loginUser, logoutUser, refreshUser, registerUser } from './operations';

const handlePending = (state) => ({ ...state, isLoading: true });
const handleRejected = (state) => (state) => ({
  ...state,
  isLoading: false,
});

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
      .addCase(registerUser.rejected, handleRejected)
      .addCase(loginUser.pending, handlePending)
      .addCase(loginUser.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        user: { ...payload.user },
        token: payload.token,
        isLoggedIn: true,
      }))
      .addCase(loginUser.rejected, handleRejected)
      .addCase(logoutUser.pending, handlePending)
      .addCase(logoutUser.fulfilled, () => ({
        ...initialState.auth,
      }))
      .addCase(logoutUser.rejected, handleRejected)
      .addCase(refreshUser.pending, handlePending)
      .addCase(refreshUser.fulfilled, (state, { payload }) => ({
        ...state,
        isLoading: false,
        user: { name: payload.name, email: payload.email },
        isLoggedIn: true,
      }))
      .addCase(refreshUser.rejected, handleRejected);
  },
});

export default authSlice.reducer;

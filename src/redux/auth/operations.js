import { createAsyncThunk } from '@reduxjs/toolkit';
import contactsServiceApi from 'service/contactsServiceApi';
import { errorToast } from 'utils/toasts';

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await contactsServiceApi.registerUser(credentials);
      if (response.keyValue) {
        errorToast('This user is already registered');
        throw new Error();
      }
      return response;
    } catch (error) {
      return rejectWithValue();
    }
  }
);

export const loginUser = createAsyncThunk(
  'auth/loginUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await contactsServiceApi.loginUser(credentials);
      if (!response.token) {
        errorToast('Wrong username or password');
        throw new Error();
      }
      console.log(response);
      return response;
    } catch (error) {
      return rejectWithValue();
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { rejectWithValue }) => {
    try {
      const response = await contactsServiceApi.logoutUser();
      if (response.message) {
        errorToast(response.message);
        throw new Error();
      }
      console.log(response);
      return response;
    } catch (error) {
      return rejectWithValue();
    }
  }
);

export const refreshUser = createAsyncThunk(
  'auth/refreshUser',
  async (_, { rejectWithValue }) => {
    try {
      const response = await contactsServiceApi.refreshUser();
      if (response.message) {
        throw new Error();
      }
      return response;
    } catch (error) {
      return rejectWithValue();
    }
  }
);

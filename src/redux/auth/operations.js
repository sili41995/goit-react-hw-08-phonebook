import { createAsyncThunk } from '@reduxjs/toolkit';
import contactsServiceApi from 'service/contactsServiceApi';

export const registerUser = createAsyncThunk(
  'auth/registerUser',
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await contactsServiceApi.registerUser(credentials);
      if (response.keyValue) {
        throw new Error('This user is already registered');
      }
      return response;
    } catch (error) {
      console.log(error.message);
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
        throw new Error('Wrong username or password');
      }
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue();
    }
  }
);

export const logoutUser = createAsyncThunk(
  'auth/logoutUser',
  async (_, { rejectWithValue }) => {
    try {
      const response = await contactsServiceApi.logoutUser();
      // if (!response.token) {
      //   throw new Error('Wrong username or password');
      // }
      console.log(response);
      return response;
    } catch (error) {
      console.log(error.message);
      return rejectWithValue();
    }
  }
);

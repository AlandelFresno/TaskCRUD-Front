import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface AuthState {
  loading: boolean;
  error: string | null;
  user: { name: string; email: string; password: string };
  token: string;
}

const initialState: AuthState = {
  loading: true,
  error: null,
  user: { name: '', email: '', password: '' },
  token: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<object>) => {
      state.user = { ...state.user, ...action.payload };
    },
    logout: (state) => {
      state.user = { ...initialState.user };
    },
    saveToken: (state, action: { payload: string }) => {
      state.token = action.payload;
      return state;
    },
    removeToken: (state) => {
      state.token = initialState.token;
    },
  },
});
export default authSlice.reducer;

export const { login, logout, saveToken, removeToken } = authSlice.actions;

// Selectors
export const selectorAuth = (state: RootState) => state.auth;

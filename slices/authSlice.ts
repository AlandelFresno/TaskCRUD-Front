import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '../store';

export interface AuthState {
  loading: boolean;
  error: string | null;
  user: {name: string, email: string, password: string};
  token: string | null;
}

const initialState: AuthState = {
  loading: true,
  error: null,
  user: {name: '', email: '', password: ''},
  token: '',
};

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => {
      return state;
    },
  },
});

export const { login } = authSlice.actions;

// Selectors
export const selectorAuth = (state: RootState) => state.auth;

export default authSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  loading: boolean;
  error: string | null;
  user: string | null;
  token: string | null;
}

const initialState: AuthState = {
  loading: true,
  error: null,
  user: null,
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
export default authSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';

export interface AuthState {
  tasks: any[];
}

const initialState: AuthState = {
  tasks: [],
};

export const taskSlice = createSlice({
  name: 'task',
  initialState,
  reducers: {
    saveAllTasks: (state, action: { payload: any[] }) => {
      state.tasks = [...action.payload];
    },
    editOneTask: (state, action) => {
      const { payload } = action;
      state.tasks[payload.index] = {
        ...state.tasks[payload.index],
        title: payload.formValues[0],
        description: payload.formValues[1],
      };
    },
    removeOneTask: (state, action) => {
      const { payload } = action;
      state.tasks = state.tasks.splice(payload.index, 1);
    },
  },
});
export default taskSlice.reducer;

export const { saveAllTasks, editOneTask, removeOneTask } = taskSlice.actions;

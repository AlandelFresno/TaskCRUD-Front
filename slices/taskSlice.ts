import { createSlice, current } from '@reduxjs/toolkit';
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
        title: payload.valueData[0],
        description: payload.valueData[1],
      };
    },
    removeOneTask: (state, action) => {
      const { payload } = action;
      const allArrays = current(state.tasks);
      const arr = [...allArrays];
      const filteredArray = arr.filter((task) => {
        if (task.id !== payload.taskId) {
          return task;
        }
      });
      state.tasks = filteredArray;
    },
    addOneTask: (
      state,
      action: { payload: { task: { title: string; description: string } } }
    ) => {
      const { payload } = action;
      const oldArray = current(state.tasks);
      const newArray = oldArray.concat(payload.task);
      state.tasks = newArray;
    },
  },
});
export default taskSlice.reducer;

export const { saveAllTasks, editOneTask, removeOneTask, addOneTask } =
  taskSlice.actions;

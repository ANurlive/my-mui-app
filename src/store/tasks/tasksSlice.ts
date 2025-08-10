import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Task } from '../../types/task';

interface TasksState {
  items: Task[];
}

const initialState: TasksState = {
  items: JSON.parse(localStorage.getItem('tasks') || '[]'),
};

const TasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    addTask(state, action: PayloadAction<string>) {
      state.items.push({
        id: Date.now(),
        text: action.payload,
        completed: false,
      });
    },
    toggleComplete(state, action: PayloadAction<number>) {
      const task = state.items.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
      }
    },
    deleteTask(state, action: PayloadAction<number>) {
      state.items = state.items.filter((task) => task.id !== action.payload);
    },
  },
});

export const tasksReducer = TasksSlice.reducer;
export const { addTask, toggleComplete, deleteTask } = TasksSlice.actions;

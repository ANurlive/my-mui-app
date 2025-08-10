import { configureStore } from '@reduxjs/toolkit';
import { tasksReducer } from './tasks/tasksSlice';
import { useDispatch } from 'react-redux';

export const store = configureStore({
  reducer: {
    tasks: tasksReducer,
  },
});

store.subscribe(() => {
  localStorage.setItem('tasks', JSON.stringify(store.getState().tasks.items));
});

export type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;
export const useAppDispatch = () => useDispatch<AppDispatch>();

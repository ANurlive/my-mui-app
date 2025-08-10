import { useSelector } from 'react-redux';
import { useAppDispatch, type RootState } from '../store/store';
import TaskForm from '../components/TaskForm';
import TaskList from '../components/TaskList';
import { addTask, deleteTask, toggleComplete } from '../store/tasks/tasksSlice';
import { Grid, Paper, Typography } from '@mui/material';

export default function Home() {
  const tasks = useSelector((state: RootState) => state.tasks.items);
  const dispatch = useAppDispatch();

  return (
    <Grid container spacing={3} sx={{ p: 3 }}>
      <Grid size={{ xs: 12, md: 4 }}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Add task
          </Typography>
          <TaskForm addTask={(text: string) => dispatch(addTask(text))} />
        </Paper>
      </Grid>

      <Grid size={{ xs: 12, md: 8 }}>
        <Paper sx={{ p: 2 }}>
          <Typography variant="h6" gutterBottom>
            Task List
          </Typography>
          <TaskList
            deleteTask={(id) => dispatch(deleteTask(id))}
            toggleComplete={(id) => dispatch(toggleComplete(id))}
            tasks={tasks}
          />
        </Paper>
      </Grid>
    </Grid>
  );
}

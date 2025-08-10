import type { Task } from '../types/task';
import {
  Card,
  CardContent,
  Checkbox,
  IconButton,
  Stack,
  Typography,
} from '@mui/material';
import { Delete } from '@mui/icons-material';

interface Props {
  tasks: Task[];
  toggleComplete: (id: number) => void;
  deleteTask: (id: number) => void;
}
export default function TaskList({ tasks, toggleComplete, deleteTask }: Props) {
  if (tasks.length === 0) return <Typography>No tasks</Typography>;

  return (
    <Stack spacing={2}>
      {tasks.map((task) => (
        <Card key={task.id}>
          <CardContent sx={{ alignItems: 'center' }}>
            <Checkbox
              checked={task.completed}
              onChange={() => toggleComplete(task.id)}
            />
            <Typography
              sx={{
                flexGrow: 1,
                textDecoration: task.completed ? 'line-through' : 'none',
              }}
            >
              {task.text}
            </Typography>
            <IconButton
              onClick={() => deleteTask(task.id)}
              aria-label={`Delete ${task.text}`}
            >
              <Delete />
            </IconButton>
          </CardContent>
        </Card>
      ))}
    </Stack>
  );
}

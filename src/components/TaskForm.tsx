import { Box, Button, TextField } from '@mui/material';
import React, { useState } from 'react';

interface Props {
  addTask: (text: string) => void;
}

export default function TaskForm({ addTask }: Props) {
  const [value, setValue] = useState('');

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const text = value.trim();
    if (!text) return;
    addTask(text);
    setValue('');
  };

  return (
    <Box
      component={'form'}
      onSubmit={onSubmit}
      sx={{ display: 'flex', gap: 1, mb: 2 }}
    >
      <TextField
        value={value}
        onChange={(e) => setValue(e.target.value)}
        label="New task"
        fullWidth
        size="small"
      />
      <Button type="submit" variant="contained">
        Add
      </Button>
    </Box>
  );
}

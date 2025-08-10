import { useCallback, useState } from 'react';
import type { Task } from '../types/task';

export function useTasks(initial: Task[] = []) {
  const [tasks, setTasks] = useState<Task[]>(initial);

  const addTask = useCallback((text: string) => {
    const newTask: Task = {
      id: Date.now(),
      text,
      completed: false,
    };

    setTasks((prev) => [...prev, newTask]);
  }, []);

  const toggleCompleted = useCallback((id: number) => {
    setTasks((prev) =>
      prev.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, []);

  const deleteTask = useCallback((id: number) => {
    setTasks((prev) => prev.filter((task) => task.id !== id));
  }, []);

  return { tasks, addTask, toggleCompleted, deleteTask };
}

import { createSlice } from '@reduxjs/toolkit';

const initialState = JSON.parse(localStorage.getItem('tasks')) || [];


export const tasksSlice = createSlice({
  name: 'tasks',
  initialState: initialState,
  reducers: {
    addTask: (state, action) => {
       state.push(action.payload);
       localStorage.setItem('tasks', JSON.stringify(state));
    },
    deleteTask: (state, action) => {
      const updatedState = state.filter(task => task.id !== action.payload);
      localStorage.setItem('tasks', JSON.stringify(updatedState));
      return updatedState;
    },
    editTask: (state, action) => {
      const { id, newText } = action.payload;
      const task = state.find(task => task.id === id);
      if (task) {
        task.text = newText;
        localStorage.setItem('tasks', JSON.stringify(state));
      }
    },
        toggleTaskComplete: (state, action) => {
      const task = state.find(task => task.id === action.payload);
      if (task) {
        task.completed = !task.completed;
        localStorage.setItem('tasks', JSON.stringify(state));
      }
    },
  },
});

export const { addTask, deleteTask, editTask, toggleTaskComplete } = tasksSlice.actions;

export default tasksSlice.reducer;
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addTask } from '../../Reducers/taskSlice';
import { nanoid } from '@reduxjs/toolkit';

const AddTodo = () => {
  const [text, setText] = useState('');
  const dispatch = useDispatch();

  const handleAddTask = () => {
    if (text.trim()) {
      dispatch(addTask({ id: nanoid(), text, completed: false }));
      setText('');
    }
  };

    
  return (
    <div className="flex mb-4 justify-center ">
      <input
        type="text"
        value={text}
        name='text'
        onChange={(e)=>setText(e.target.value)}
        className="border rounded w-[80%] py-2 px-3 mr-4 text-gray-700"
        placeholder="Add a new task"
      />
      <button
        onClick={handleAddTask}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-0 px-10 rounded"
      >
        Add Task
      </button>
    </div>
  );
};

export default AddTodo;

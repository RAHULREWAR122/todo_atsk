import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { deleteTask, editTask , toggleTaskComplete } from '../../Reducers/taskSlice';


const TodoList = () => {
    const tasks = useSelector((state) => state.tasks);
    const dispatch = useDispatch();
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState('');
  
    const handleEditTask = (task) => {
      setEditId(task.id);
      setEditText(task.text);
    };
  
    const handleSaveEdit = () => {
      if (editText.trim()) {
        dispatch(editTask({ id: editId, newText: editText }));
        setEditId(null);
        setEditText('');
      }
  };
  
    return (
      <ul className="list-disc pl-5">
        {tasks.map((task) => (
          <li key={task.id} className="flex mb-2 items-center">
            <input
              type="checkbox"
              checked={task.completed || false}
              onChange={() => dispatch(toggleTaskComplete(task.id))}
              className="mr-2"
            />
            {editId === task.id ? (
              <input
                type="text"
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                className="border rounded w-[100%] py-2 px-3 text-gray-700"
              />
            ) : (
              <span
                className={`w-[100%] text-[15px] flex flex-wrap  py-2 px-3 text-gray-700 ${task.completed ? 'line-through text-red-600' : ''}`}
              >
                {task.text.length < 30 ? task.text : task.text.slice(0,25)+"..."}
              </span>
            )}
            {editId === task.id ? (<>
              <button
                onClick={handleSaveEdit}
                className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded ml-2"
              >
                Save
              </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => handleEditTask(task)}
                  className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded ml-2"
                >
                  Edit
                </button>
                <button
                  onClick={() => dispatch(deleteTask(task.id))}
                  className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded ml-2"
                >
                  Delete
                </button>
              </>
            )}
          </li>
        ))}
      </ul>
    );
};

export default TodoList;

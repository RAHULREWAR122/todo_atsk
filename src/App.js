import React from 'react';
import { Provider } from 'react-redux';
import { store } from './Reducers/store';
import AddTodo from './components/AddTodo/addTodo';
import TodoList from './components/TodoList/todoList';

const App = () => {
  return (
    <Provider store={store}>
      <div className="container mx-auto mt-10 p-5">
        <h1 className="text-2xl font-bold mb-5 text-center">To - Do List</h1>
        <AddTodo />
        <TodoList />
      </div>
    </Provider>
  );
};

export default App;

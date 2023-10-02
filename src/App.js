// src/App.js
import React, { useState } from 'react';
import TodoList from './components/TodoList';
import AddTodo from './components/AddTodo';
import 'motion-ui/dist/motion-ui.min.css'; // Import Motion UI CSS
import './App.css'; // Create a new CSS file for your styles

const App = () => {
  const [todos, setTodos] = useState([]);

  const addTodo = text => {
    setTodos([...todos, { id: Date.now(), text, completed: false }]);
  }

  const toggleComplete = id => {
    setTodos(todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    ));
  }

  const deleteTodo = id => {
    setTodos(todos.filter(todo => todo.id !== id));
  }

  return (
    <div className="App motion-ui-slide-bottom">
      <div className="app-container">
        <h1>Todo List</h1>
        <AddTodo addTodo={addTodo} />
        <TodoList todos={todos} toggleComplete={toggleComplete} deleteTodo={deleteTodo} />
      </div>
    </div>
  );
}

export default App;

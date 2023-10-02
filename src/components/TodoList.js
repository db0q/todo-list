// src/components/TodoList.js
import React from 'react';
import TodoItem from './TodoItem';
import 'motion-ui/dist/motion-ui.min.css'; // Import Motion UI CSS

const TodoList = ({ todos, toggleComplete, deleteTodo }) => {
  return (
    <ul className="motion-ui-slide-bottom">
      {todos.map(todo => (
        <TodoItem
          key={todo.id}
          todo={todo}
          toggleComplete={toggleComplete}
          deleteTodo={deleteTodo}
        />
      ))}
    </ul>
  );
}

export default TodoList;

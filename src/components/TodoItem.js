// src/components/TodoItem.js
import React from 'react';
import 'motion-ui/dist/motion-ui.min.css'; // Import Motion UI CSS

const TodoItem = ({ todo, toggleComplete, deleteTodo }) => {
  return (
    <li className="motion-ui-slide-bottom">
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={() => toggleComplete(todo.id)}
      />
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
        {todo.text}
      </span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </li>
  );
}

export default TodoItem;


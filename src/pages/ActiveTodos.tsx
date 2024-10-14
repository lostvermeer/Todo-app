import React from 'react';
import { Todo } from '../contexts/TodoContext';

interface ActiveTodosProps {
  todos: Todo[];
}

const ActiveTodos: React.FC<ActiveTodosProps> = ({ todos }) => {
  const activeTodos = todos.filter((todo) => !todo.completed);

  return (
    <div>
      <h2>Active Todos</h2>
      {activeTodos.length === 0 ? (
        <p>No active todos.</p>
      ) : (
        <ul>
          {activeTodos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ActiveTodos;

import React from 'react';
import { Todo } from '../contexts/TodoContext';

interface AllTodosProps {
  todos: Todo[];
}

const AllTodos: React.FC<AllTodosProps> = ({ todos }) => {
  return (
    <div>
      <h2>All Todos</h2>
      {todos.length === 0 ? (
        <p>No todos available.</p>
      ) : (
        <ul>
          {todos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default AllTodos;

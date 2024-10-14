import React from 'react';
import { Todo } from '../contexts/TodoContext';

interface CompletedTodosProps {
  todos: Todo[];
}

const CompletedTodos: React.FC<CompletedTodosProps> = ({ todos }) => {
  const completedTodos = todos.filter((todo) => todo.completed);

  return (
    <div>
      <h2>Completed Todos</h2>
      {completedTodos.length === 0 ? (
        <p>No completed todos.</p>
      ) : (
        <ul>
          {completedTodos.map((todo) => (
            <li key={todo.id}>{todo.title}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default CompletedTodos;

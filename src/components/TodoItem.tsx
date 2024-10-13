import React from 'react';
import { Todo } from '../contexts/TodoContext';
import useTodoContext from '../hooks/useTodoContext';

interface TodoItemProps {
  todo: Todo;
}

const TodoItem: React.FC<TodoItemProps> = ({ todo }) => {
  const { dispatch } = useTodoContext();

  const handleToggleTodo = () => {
    dispatch({ type: 'TOGGLE_TODO', payload: todo.id });
  };

  const handleDeleteTodo = () => {
    dispatch({ type: 'DELETE_TODO', payload: todo.id });
  };

  return (
    <li>
      <input
        type="checkbox"
        checked={todo.completed}
        onChange={handleToggleTodo}
      />
      <span
        style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}
      >
        {todo.title}
      </span>
      <button onClick={handleDeleteTodo}>Delete</button>
    </li>
  );
};

export default TodoItem;

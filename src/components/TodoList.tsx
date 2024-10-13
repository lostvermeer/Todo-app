import React from 'react';
import useTodoContext from '../hooks/useTodoContext';
import { Todo } from '../contexts/TodoContext';
import TodoItem from './TodoItem';

const TodoList: React.FC = () => {
  const { state } = useTodoContext();

  return (
    <ul>
      {state.todos.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </ul>
  );
};

export default TodoList;

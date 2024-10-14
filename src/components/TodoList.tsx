import React from 'react';
import useTodoContext from '../hooks/useTodoContext';
import { Todo } from '../contexts/TodoContext';
import TodoItem from './TodoItem';
import { List } from '@mui/material';

const TodoList: React.FC = () => {
  const { state } = useTodoContext();

  const filteredTodos = state.todos.filter((todo: Todo) => {
    if (state.filter === 'active') {
      return !todo.completed;
    } else if (state.filter === 'completed') {
      return todo.completed;
    }
    return true;
  });

  return (
    <List>
      {filteredTodos.map((todo: Todo) => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </List>
  );
};

export default TodoList;

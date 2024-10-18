import React from 'react';
import useTodoContext from '../hooks/useTodoContext';
import { Todo } from '../contexts/TodoContext';
import TodoItem from './TodoItem';
import styled from 'styled-components';

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
    <ListContainer>
      {filteredTodos.length ? (
        filteredTodos.map((todo: Todo) => (
          <TodoItem key={todo.id} todo={todo} />
        ))
      ) : (
        <NoTodosContainer data-testid="noTodos">
          No todos available.
        </NoTodosContainer>
      )}
    </ListContainer>
  );
};

// Styled components
const ListContainer = styled.div`
  padding: 5px; /* Add padding for a better look */
`;

const NoTodosContainer = styled.h1`
  font-size: 20px;
  font-weight: 50;
  color: #aaa;
  text-align: center;
  margin: 20px 0;
  text-transform: lowercase;
`;

export default TodoList;

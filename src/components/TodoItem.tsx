import React from 'react';
import styled from 'styled-components';
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
    <TodoItemContainer>
      <TodoCheckbox
        data-testid="checkbox"
        completed={todo.completed.toString()}
        onClick={handleToggleTodo}
      />
      <TodoText completed={todo.completed.toString()}>{todo.title}</TodoText>
      <DeleteButton onClick={handleDeleteTodo}>×</DeleteButton>
    </TodoItemContainer>
  );
};

// Styled components
const TodoItemContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 1px solid #eee;
  padding: 10px;
`;

const TodoCheckbox = styled.div<{ completed: string }>`
  width: 24px;
  height: 24px;
  border: 2px solid #ddd;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition:
    background-color 0.3s,
    border-color 0.3s;

  &:hover {
    border-color: #4caf50;
  }

  &::after {
    content: ${({ completed }) => (completed === 'true' ? "'✓'" : "''")};
    color: #4caf50;
    font-size: 16px;
    display: ${({ completed }) => (completed === 'true' ? 'block' : 'none')};
  }
`;

const TodoText = styled.span<{ completed: string }>`
  text-decoration: ${({ completed }) =>
    completed === 'true' ? 'line-through' : 'none'};
  color: ${({ completed }) => (completed === 'true' ? '#aaa' : '#4d4d4d')};
  flex-grow: 1;
  padding-left: 15px;
  font-size: 18px; /* Adjusted font size to match the design */
  font-family: 'Arial', sans-serif; /* Updated to match the font style in the image */
`;

const DeleteButton = styled.button`
  background: none;
  border: none;
  color: #cc9a9a;
  font-size: 18px;
  cursor: pointer;
  padding: 0 5px;
  transition: color 0.3s ease;

  &:hover {
    color: #af5b5e;
    text-shadow: 0 0 1px #af5b5e;
  }
`;

const areEqual = (prevProps: TodoItemProps, nextProps: TodoItemProps) => {
  return (
    prevProps.todo.id === nextProps.todo.id &&
    prevProps.todo.completed === nextProps.todo.completed
  );
};

const memoize = React.memo(TodoItem, areEqual);

export default memoize;

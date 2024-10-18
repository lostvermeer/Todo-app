import React from 'react';
import styled from 'styled-components';
import useTodoContext from '../hooks/useTodoContext';

const TodoFooter: React.FC = () => {
  const { state, dispatch } = useTodoContext();
  const { incompleteCount, hasCompletedTodos } = state.todos.reduce(
    (counts, todo) => {
      if (todo.completed) {
        counts.hasCompletedTodos = true;
      } else {
        counts.incompleteCount++;
      }
      return counts;
    },
    { incompleteCount: 0, hasCompletedTodos: false }
  );

  const handleClearCompleted = () => {
    dispatch({ type: 'CLEAR_COMPLETED' });
  };

  const handleFilterChange = (filter: 'all' | 'active' | 'completed') => {
    dispatch({ type: 'SET_FILTER', payload: filter });
  };

  return (
    <FooterContainer>
      <ItemsLeft>
        {incompleteCount} {incompleteCount <= 1 ? 'item left' : 'items left'}
      </ItemsLeft>
      <FilterButtons>
        <FilterButton
          onClick={() => handleFilterChange('all')}
          selected={state.filter === 'all'}
        >
          All
        </FilterButton>
        <FilterButton
          onClick={() => handleFilterChange('active')}
          selected={state.filter === 'active'}
        >
          Active
        </FilterButton>
        <FilterButton
          onClick={() => handleFilterChange('completed')}
          selected={state.filter === 'completed'}
        >
          Completed
        </FilterButton>
      </FilterButtons>
      <ClearCompletedButton
        onClick={handleClearCompleted}
        disabled={!hasCompletedTodos}
      >
        {hasCompletedTodos ? 'Clear' : 'Clear completed'}
      </ClearCompletedButton>
    </FooterContainer>
  );
};

// Styled components
const FooterContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #f5f5f5;
  border-top: 1px solid #e0e0e0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-size: 14px;
  color: #777;
`;

const ItemsLeft = styled.span`
  flex: 1;
  text-align: left;
`;

const FilterButtons = styled.div`
  display: flex;
  gap: 10px;
`;

const FilterButton = styled.button<{ selected: boolean }>`
  background: none;
  border: none;
  color: ${(props) => (props.selected ? '#333' : '#777')};
  cursor: pointer;
  border: ${(props) =>
    props.selected ? '1px solid rgba(175, 47, 47, 0.2)' : 'none'};
  border-radius: 3px;
  padding: 3px 5px;
`;

const ClearCompletedButton = styled.button`
  background: none;
  border: none;
  color: #777;
  cursor: pointer;
  flex: 1;
  text-align: right;
  &:disabled {
    opacity: 0.5;
    cursor: default;
  }
`;

export default TodoFooter;

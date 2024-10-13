import React from 'react';
import { Todo } from '../contexts/TodoContext';
import useTodoContext from '../hooks/useTodoContext';

const TodoFooter: React.FC = () => {
  const { state, dispatch } = useTodoContext();

  const handleClearCompleted = () => {
    dispatch({ type: 'CLEAR_COMPLETED' });
  };

  return (
    <div>
      <span>
        {state.todos.filter((todo: Todo) => !todo.completed).length} items left
      </span>
      <button onClick={handleClearCompleted}>Clear completed</button>
    </div>
  );
};

export default TodoFooter;

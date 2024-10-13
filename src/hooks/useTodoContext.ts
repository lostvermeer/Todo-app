import { useContext } from 'react';
import { TodoContext, TodoContextProps } from '../contexts/TodoContext';

const useTodoContext = (): TodoContextProps => {
  const context = useContext<TodoContextProps | null>(TodoContext);

  if (context === null) {
    throw new Error(
      'useTodoContext must be used within a TodoProvider - (reading value: null)'
    );
  }

  return context;
};

export default useTodoContext;

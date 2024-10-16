import React, { ReactNode, Dispatch, useReducer } from 'react';
import {
  TodoContext,
  todoReducer,
  initialState,
  Action,
  State,
} from '../contexts/TodoContext';

interface MockTodoProviderProps {
  children: ReactNode;
  mockDispatch?: Dispatch<Action>;
  mockState?: State;
}

export const MockTodoProvider = ({
  children,
  mockDispatch,
  mockState,
}: MockTodoProviderProps) => {
  const [state, dispatch] = useReducer(todoReducer, mockState || initialState);

  return (
    <TodoContext.Provider value={{ state, dispatch: mockDispatch || dispatch }}>
      {children}
    </TodoContext.Provider>
  );
};

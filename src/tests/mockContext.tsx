import React, { createContext, useReducer, ReactNode, Dispatch } from 'react';
import {
  todoReducer,
  initialState,
  State,
  Action,
} from '../contexts/TodoContext';

interface MockContextProps {
  state: State;
  dispatch: Dispatch<Action>;
}

export const MockContext = createContext<MockContextProps>({
  state: initialState,
  dispatch: () => null,
});

interface MockProviderProps {
  children: ReactNode;
  mockDispatch?: Dispatch<Action>;
}

export const MockProvider = ({ children, mockDispatch }: MockProviderProps) => {
  const [state, dispatch] = useReducer(todoReducer, initialState);

  return (
    <MockContext.Provider value={{ state, dispatch: mockDispatch || dispatch }}>
      {children}
    </MockContext.Provider>
  );
};

import { render, screen, fireEvent } from '@testing-library/react';
import TodoItem from '../components/TodoItem';
import { TodoProvider } from '../contexts/TodoContext';

const mockDispatch = jest.fn();
jest.mock('../hooks/useTodoContext', () => {
  return {
    __esModule: true,
    default: () => ({
      dispatch: mockDispatch,
    }),
  };
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('TodoItem', () => {
  const mockTodo = {
    id: '1',
    title: 'Test Todo',
    completed: false,
  };

  it('renders the todo item correctly', () => {
    render(
      <TodoProvider>
        <TodoItem key={mockTodo.id} todo={mockTodo} />
      </TodoProvider>
    );

    expect(screen.getByText('Test Todo')).toBeInTheDocument();
    expect(screen.getByText('×')).toBeInTheDocument();
  });

  it('dispatches toggle action when checkbox is clicked', () => {
    render(
      <TodoProvider>
        <TodoItem key={mockTodo.id} todo={mockTodo} />
      </TodoProvider>
    );

    const checkbox = screen.getByTestId('checkbox');
    fireEvent.click(checkbox);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'TOGGLE_TODO',
      payload: mockTodo.id,
    });
  });

  it('dispatches delete action when delete button is clicked', () => {
    render(
      <TodoProvider>
        <TodoItem key={mockTodo.id} todo={mockTodo} />
      </TodoProvider>
    );

    const deleteButton = screen.getByText('×');
    fireEvent.click(deleteButton);

    expect(mockDispatch).toHaveBeenCalledWith({
      type: 'DELETE_TODO',
      payload: mockTodo.id,
    });
  });

  it('displays the correct styles when the todo is completed', () => {
    const completedTodo = { ...mockTodo, completed: true };

    render(
      <TodoProvider>
        <TodoItem key={mockTodo.id} todo={completedTodo} />
      </TodoProvider>
    );

    const todoText = screen.getByText('Test Todo');
    expect(todoText).toHaveStyle('text-decoration: line-through');
    expect(todoText).toHaveStyle('color: #aaa');
  });
});

import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import TodoFooter from '../components/TodoFooter';
import { TodoProvider } from '../contexts/TodoContext';

const mockDispatch = jest.fn();
jest.mock('../hooks/useTodoContext', () => {
  return {
    __esModule: true,
    default: () => ({
      state: {
        todos: [
          { id: '1', text: 'Todo 1', completed: false },
          { id: '2', text: 'Todo 2', completed: true },
        ],
        filter: 'all',
      },
      dispatch: mockDispatch,
    }),
  };
});

afterEach(() => {
  jest.clearAllMocks();
});

describe('TodoFooter', () => {
  it('renders the footer correctly', () => {
    render(
      <TodoProvider>
        <TodoFooter />
      </TodoProvider>
    );

    expect(screen.getByText('1 item left')).toBeInTheDocument();
    expect(screen.getByText('All')).toBeInTheDocument();
    expect(screen.getByText('Active')).toBeInTheDocument();
    expect(screen.getByText('Completed')).toBeInTheDocument();
    expect(screen.getByText('Clear')).toBeInTheDocument();
  });

  it('handles filter button clicks correctly', async () => {
    render(
      <TodoProvider>
        <TodoFooter />
      </TodoProvider>
    );

    fireEvent.click(screen.getByText('Active'));
    await waitFor(() =>
      expect(mockDispatch).toHaveBeenCalledWith({
        type: 'SET_FILTER',
        payload: 'active',
      })
    );

    fireEvent.click(screen.getByText('Completed'));
    await waitFor(() =>
      expect(mockDispatch).toHaveBeenCalledWith({
        type: 'SET_FILTER',
        payload: 'completed',
      })
    );

    fireEvent.click(screen.getByText('All'));
    await waitFor(() =>
      expect(mockDispatch).toHaveBeenCalledWith({
        type: 'SET_FILTER',
        payload: 'all',
      })
    );
  });

  it('handles clear completed button click correctly', async () => {
    render(
      <TodoProvider>
        <TodoFooter />
      </TodoProvider>
    );

    const clearButton = screen.getByText('Clear');
    fireEvent.click(clearButton);
    await waitFor(() =>
      expect(mockDispatch).toHaveBeenCalledWith({ type: 'CLEAR_COMPLETED' })
    );
  });
});

import { render, screen } from '@testing-library/react';
import TodoList from '../components/TodoList';
import { TodoProvider } from '../contexts/TodoContext';
import useTodoContext from '../hooks/useTodoContext';

jest.mock('../hooks/useTodoContext');

const setupMock = (
  todos: { id: string; title: string; completed: boolean }[],
  filter: string
) => {
  (useTodoContext as jest.Mock).mockReturnValue({
    state: {
      todos,
      filter,
    },
  });
};

afterEach(() => {
  jest.clearAllMocks();
});

describe('TodoList', () => {
  it('renders all todos when filter is set to "all"', () => {
    setupMock(
      [
        { id: '1', title: 'Todo 1', completed: true },
        { id: '2', title: 'Todo 2', completed: true },
        { id: '3', title: 'Todo 3', completed: false },
      ],
      'all'
    );
    render(
      <TodoProvider>
        <TodoList />
      </TodoProvider>
    );

    expect(screen.getByText('Todo 1')).toBeInTheDocument();
    expect(screen.getByText('Todo 2')).toBeInTheDocument();
    expect(screen.getByText('Todo 3')).toBeInTheDocument();
  });

  it('renders completed todos when filter is set to "completed"', () => {
    setupMock(
      [
        { id: '1', title: 'Todo 1', completed: true },
        { id: '2', title: 'Todo 2', completed: true },
        { id: '3', title: 'Todo 3', completed: false },
      ],
      'completed'
    );
    render(
      <TodoProvider>
        <TodoList />
      </TodoProvider>
    );

    expect(screen.getByText('Todo 1')).toBeInTheDocument();
    expect(screen.getByText('Todo 2')).toBeInTheDocument();
    expect(screen.queryByText('Todo 3')).not.toBeInTheDocument();
  });

  it('renders active todos when filter is set to "active"', () => {
    setupMock(
      [
        { id: '1', title: 'Todo 1', completed: true },
        { id: '2', title: 'Todo 2', completed: true },
        { id: '3', title: 'Todo 3', completed: false },
      ],
      'active'
    );
    render(
      <TodoProvider>
        <TodoList />
      </TodoProvider>
    );

    expect(screen.queryByText('Todo 1')).not.toBeInTheDocument();
    expect(screen.queryByText('Todo 2')).not.toBeInTheDocument();
    expect(screen.getByText('Todo 3')).toBeInTheDocument();
  });

  it('renders the "No todos available" message when there are no todos', () => {
    setupMock([], 'all');
    render(
      <TodoProvider>
        <TodoList />
      </TodoProvider>
    );

    expect(screen.getByText('No todos available.')).toBeInTheDocument();
  });
});

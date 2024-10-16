import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import TodoInput from '../components/TodoInput';
import { TodoProvider } from '../contexts/TodoContext';

const mockDispatch = jest.fn();
jest.mock('../hooks/useTodoContext', () => {
  return {
    __esModule: true,
    default: () => ({ dispatch: mockDispatch }),
  };
});

jest.mock('lodash/debounce', () => (fn: string) => fn);

afterEach(() => {
  jest.clearAllMocks();
});

describe('TodoInput', () => {
  it('renders the form correctly', () => {
    render(
      <TodoProvider>
        <TodoInput />
      </TodoProvider>
    );
    const inputField = screen.getByPlaceholderText('what needs to be done?');
    const addButton = screen.getByText('✓');
    expect(inputField).toBeInTheDocument();
    expect(addButton).toBeInTheDocument();
  });

  it('submits the form with valid input', async () => {
    render(
      <TodoProvider>
        <TodoInput />
      </TodoProvider>
    );
    const inputField = screen.getByPlaceholderText('what needs to be done?');
    const addButton = screen.getByText('✓');

    userEvent.type(inputField, 'New Todo');
    userEvent.click(addButton);

    await waitFor(() =>
      expect(mockDispatch).toHaveBeenCalledWith({
        type: 'ADD_TODO',
        payload: 'New Todo',
      })
    );
  });

  it('does not submit the form with empty input', async () => {
    render(
      <TodoProvider>
        <TodoInput />
      </TodoProvider>
    );
    const inputField = screen.getByPlaceholderText('what needs to be done?');
    const addButton = screen.getByText('✓');

    userEvent.type(inputField, '   ');
    userEvent.click(addButton);

    await waitFor(() => expect(mockDispatch).not.toHaveBeenCalled());
  });
});

import React from 'react';
import { Todo } from '../contexts/TodoContext';
import useTodoContext from '../hooks/useTodoContext';
import {
  ListItem,
  ListItemIcon,
  ListItemText,
  Checkbox,
  IconButton,
} from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

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
    <ListItem
      secondaryAction={
        <IconButton edge="end" aria-label="delete" onClick={handleDeleteTodo}>
          <DeleteIcon />
        </IconButton>
      }
      disablePadding
      sx={{ borderBottom: '1px solid #eee', padding: '10px 0' }}
    >
      <ListItemIcon>
        <Checkbox
          edge="start"
          checked={todo.completed}
          onChange={handleToggleTodo}
        />
      </ListItemIcon>
      <ListItemText
        primary={todo.title}
        sx={{
          textDecoration: todo.completed ? 'line-through' : 'none',
          color: todo.completed ? '#aaa' : '#000',
        }}
      />
    </ListItem>
  );
};

export default TodoItem;

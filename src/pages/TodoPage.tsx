import React from 'react';
import TodoList from '../components/TodoList';
import TodoInput from '../components/TodoInput';
import { Box, Typography } from '@mui/material';

const TodosPage: React.FC = () => {
  return (
    <Box
      sx={{
        padding: '20px',
        minHeight: '78vh',
        maxHeight: '78vh',
        overflowY: 'auto',
      }}
    >
      <Typography variant="h2" color="inherit">
        todos
      </Typography>
      <br />
      <TodoInput />
      <TodoList />
    </Box>
  );
};

export default TodosPage;

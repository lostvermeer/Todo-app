import React from 'react';
import TodoList from '../components/TodoList';
import TodoInput from '../components/TodoInput';
import { Box, Typography } from '@mui/material';
import TodoFooter from '../components/TodoFooter';

const TodosPage: React.FC = () => {
  return (
    <Box
      sx={{
        padding: '20px',
        margin: '20px',
        minHeight: '100vh',
        maxHeight: '100vh',
        overflowY: 'auto',
      }}
    >
      <Typography variant="h2" color="primary">
        todos
      </Typography>
      <TodoInput />
      <TodoList />
      <TodoFooter />
    </Box>
  );
};

export default TodosPage;

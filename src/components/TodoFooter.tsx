// import React from 'react';
// import useTodoContext from '../hooks/useTodoContext';
// import { Button, Typography } from '@mui/material';

// const TodoFooter: React.FC = () => {
//   const { state, dispatch } = useTodoContext();
//   const { incompleteCount, hasCompletedTodos } = state.todos.reduce(
//     (counts, todo) => {
//       if (todo.completed) {
//         counts.hasCompletedTodos = true;
//       } else {
//         counts.incompleteCount++;
//       }
//       return counts;
//     },
//     { incompleteCount: 0, hasCompletedTodos: false }
//   );

//   const handleClearCompleted = () => {
//     dispatch({ type: 'CLEAR_COMPLETED' });
//   };

//   return (
//     <div
//       style={{
//         display: 'flex',
//         justifyContent: 'space-between',
//         padding: '16px',
//       }}
//     >
//       <Typography variant="button">
//         {incompleteCount} {incompleteCount <= 1 ? 'item left' : 'items left'}
//       </Typography>
//       <Button
//         variant="text"
//         color="primary"
//         onClick={handleClearCompleted}
//         disabled={!hasCompletedTodos}
//       >
//         {hasCompletedTodos ? 'Clear' : 'Clear completed'}
//       </Button>
//     </div>
//   );
// };

// export default TodoFooter;

import React from 'react';
import useTodoContext from '../hooks/useTodoContext';
import Grid from '@mui/material/Grid2';
import { BottomNavigation, Box, Button, Typography } from '@mui/material';

const TodoFooter: React.FC = () => {
  const { state, dispatch } = useTodoContext();
  const { incompleteCount, hasCompletedTodos } = state.todos.reduce(
    (counts, todo) => {
      if (todo.completed) {
        counts.hasCompletedTodos = true;
      } else {
        counts.incompleteCount++;
      }
      return counts;
    },
    { incompleteCount: 0, hasCompletedTodos: false }
  );

  const handleClearCompleted = () => {
    dispatch({ type: 'CLEAR_COMPLETED' });
  };

  const handleFilterChange = (filter: 'all' | 'active' | 'completed') => {
    dispatch({ type: 'SET_FILTER', payload: filter });
  };

  // Extracted button styles and variant logic
  const buttonStyles = {
    display: 'flex',
    alignItems: 'center',
    margin: 'auto',
  };

  return (
    <Grid container columnSpacing={0}>
      <Box
        sx={{
          position: 'static',
          bottom: 0,
          width: '100%',
          backgroundColor: '#f5f5f5',
          borderTop: '1px solid #e0e0e0',
        }}
      >
        <BottomNavigation showLabels sx={{ alignItems: 'center' }}>
          <Grid size="grow">
            <Typography
              variant="button"
              sx={{
                marginRight: 'auto',
                paddingLeft: 2,
                display: 'flex',
                alignItems: 'center',
                height: '100%',
              }}
            >
              {incompleteCount}
              {incompleteCount <= 1 ? ' item left' : ' items left'}
            </Typography>
          </Grid>
          <Grid size={1}>
            <Button
              onClick={() => handleFilterChange('all')}
              variant={state.filter === 'all' ? 'outlined' : 'text'}
              sx={{ ...buttonStyles }}
            >
              All
            </Button>
          </Grid>
          <Grid size={1}>
            <Button
              onClick={() => handleFilterChange('active')}
              variant={state.filter === 'active' ? 'outlined' : 'text'}
              sx={{ ...buttonStyles }}
            >
              Active
            </Button>
          </Grid>
          <Grid size={2}>
            <Button
              onClick={() => handleFilterChange('completed')}
              variant={state.filter === 'completed' ? 'outlined' : 'text'}
              sx={{ ...buttonStyles }}
            >
              Completed
            </Button>
          </Grid>
          <Grid size="grow">
            <Button
              variant="text"
              color="primary"
              onClick={handleClearCompleted}
              disabled={!hasCompletedTodos}
              sx={{
                paddingLeft: 2,
                display: 'flex',
                alignItems: 'center',
                marginLeft: 'auto',
                marginRight: 2,
                minWidth: '110px',
              }}
            >
              {hasCompletedTodos ? 'Clear completed' : 'Clear'}
            </Button>
          </Grid>
        </BottomNavigation>
      </Box>
    </Grid>
  );
};

export default TodoFooter;

import React from 'react';
import { useForm } from 'react-hook-form';
import { debounce } from 'lodash';
import useTodoContext from '../hooks/useTodoContext';
import { TextField, Button, Box } from '@mui/material';

const TodoInput: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<{ todoText: string }>();
  const { dispatch } = useTodoContext();

  const onSubmit = debounce((data: { todoText: string }) => {
    if (data.todoText.trim() !== '') {
      dispatch({ type: 'ADD_TODO', payload: data.todoText });
      reset();
    }
  }, 300);

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: '20px' }}>
        <TextField
          {...register('todoText')}
          label="What needs to be done?"
          variant="outlined"
          size="small"
          fullWidth
          sx={{
            flex: 1,
            borderRadius: '5px',
            backgroundColor: '#fff',
            '& .MuiOutlinedInput-root': {
              '& fieldset': {
                borderColor: '#ccc',
              },
              '&:hover fieldset': {
                borderColor: '#aaa',
              },
            },
          }}
        />
        <Button
          type="submit"
          variant="text"
          color="primary"
          sx={{ marginLeft: '10px' }}
        >
          Add
        </Button>
      </Box>
    </form>
  );
};

export default TodoInput;

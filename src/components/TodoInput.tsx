import React from 'react';
import { useForm } from 'react-hook-form';
import { debounce } from 'lodash';
import useTodoContext from '../hooks/useTodoContext';

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
      <input {...register('todoText')} placeholder="What needs to be done?" />
      <button type="submit">Add</button>
    </form>
  );
};

export default TodoInput;

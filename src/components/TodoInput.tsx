import React from 'react';
import styled from 'styled-components';
import { useForm } from 'react-hook-form';
import { debounce } from 'lodash';
import useTodoContext from '../hooks/useTodoContext';

const FormContainer = styled.form`
  display: flex;
  align-items: center;
  margin: 5px;
  padding: 10px;
`;

const InputField = styled.input`
  flex: 1;
  padding: 10px;
  border: 2px solid transparent;
  border-bottom: 2px solid #ddd;
  border-radius: 5px;
  background-color: #fff;
  font-size: 16px;
  outline: none;
  transition:
    background-color 0.3s,
    border-color 0.3s;

  &:hover {
    border-bottom: 2px solid #4caf50;
  }

  &:focus {
    border-bottom: 2px solid #4caf50;
  }
`;

const AddButton = styled.button`
  color: #4caf50;
  background-color: transparent;
  border: 2px solid #ddd;
  padding: 10px 15px;
  margin-left: 10px;
  border-radius: 50%;
  cursor: pointer;
  transition:
    background-color 0.3s,
    border-color 0.3s;

  &:hover {
    border-color: #4caf50;
  }
`;

const TodoInput: React.FC = () => {
  const { register, handleSubmit, reset } = useForm<{ todoText: string }>();
  const { dispatch } = useTodoContext();

  const onSubmit = debounce((data: { todoText: string }) => {
    if (data.todoText.trim() !== '') {
      dispatch({ type: 'ADD_TODO', payload: data.todoText });
      reset();
    }
  }, 100);

  return (
    <FormContainer onSubmit={handleSubmit(onSubmit)}>
      <InputField
        {...register('todoText')}
        placeholder="what needs to be done?"
      />
      <AddButton type="submit">✓</AddButton>
    </FormContainer>
  );
};

export default TodoInput;

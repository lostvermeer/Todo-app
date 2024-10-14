import React from 'react';
import styled from 'styled-components';
import TodoList from '../components/TodoList';
import TodoInput from '../components/TodoInput';
import TodoFooter from '../components/TodoFooter';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  min-height: 98vh;
  background-color: #f5f5f5;
  font-family: 'Arial', sans-serif;
`;

const Title = styled.h1`
  font-size: 100px;
  font-weight: 100;
  color: rgba(175, 47, 47, 0.15);
  text-align: center;
  margin: 20px 0;
  text-transform: lowercase;
`;

// const TodoContainer = styled.div`
//   width: 90%;
//   max-width: 550px;
//   background: white;
//   box-shadow:
//     0 2px 4px rgba(0, 0, 0, 0.1),
//     0 25px 50px rgba(0, 0, 0, 0.2);
//   overflow: hidden;
//   margin-bottom: 40px;
// `;

const TodoContainer = styled.div`
  width: 90%;
  max-width: 550px;
  height: 500px; /* Set a fixed height */
  background: white;
  box-shadow:
    0 2px 4px rgba(0, 0, 0, 0.1),
    0 25px 50px rgba(0, 0, 0, 0.2);
  display: flex;
  flex-direction: column; /* Ensure items stack vertically */
  overflow: hidden; /* Prevent overflowing elements */
  margin-bottom: 40px;
`;

const ScrollableTodoList = styled.div`
  flex-grow: 1;
  overflow-y: auto;
`;

const TodosPage: React.FC = () => {
  return (
    <PageContainer>
      <Title>todos</Title>
      <TodoContainer>
        <TodoInput />
        <ScrollableTodoList>
          <TodoList />
        </ScrollableTodoList>
        <TodoFooter />
      </TodoContainer>
    </PageContainer>
  );
};

export default TodosPage;

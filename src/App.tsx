import React from 'react';
import TodoInput from './components/TodoInput';
import TodoList from './components/TodoList';
import TodoFooter from './components/TodoFooter';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <h1>Todo List</h1>
      <TodoInput />
      <TodoList />
      <TodoFooter />
    </div>
  );
};

export default App;

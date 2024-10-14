import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Container } from '@mui/material';
// import TodoInput from './components/TodoInput';
// import TodoList from './components/TodoList';
// import TodoFooter from './components/TodoFooter';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import TodoPage from './pages/TodoPage';
// import NavBar from './components/NavBar';
import TodoFooter from './components/TodoFooter';
import './styles/App.css';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Container>
        {/* <NavBar /> */}
        <br />
        <Routes>
          <Route path="/" element={<TodoPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/home" element={<HomePage />} />
        </Routes>
        <TodoFooter />
      </Container>
    </BrowserRouter>
  );
};

export default App;

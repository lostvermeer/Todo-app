import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import TodoPage from './pages/TodoPage';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<TodoPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;

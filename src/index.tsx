import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
import { TodoProvider } from './contexts/TodoContext';

const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement as HTMLElement);

root.render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>
);

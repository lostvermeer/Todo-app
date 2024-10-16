import * as React from 'react';
import * as ReactDOM from 'react-dom/client';
import App from './App';
import { TodoProvider } from './contexts/TodoContext';

const rootElement = document.getElementById('root');
if (rootElement === null) {
  throw new Error('Root container missing in index.html');
}

const root = ReactDOM.createRoot(rootElement);

root.render(
  <React.StrictMode>
    <TodoProvider>
      <App />
    </TodoProvider>
  </React.StrictMode>
);

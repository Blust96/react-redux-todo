import React from 'react';

import AppHeader from './components/AppHeader';
import { TodoList } from './components/todo';
import './App.css';

function App() {
  return (
    <div className="app">
      <AppHeader />
      <TodoList />
    </div>
  );
}

export default App;

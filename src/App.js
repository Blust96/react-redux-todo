import React from 'react';

import AppHeader from './components/AppHeader';
import { TaskList } from './components/task';
import './App.css';

function App() {
  return (
    <div className="app">
      <AppHeader />
      <TaskList />
    </div>
  );
}

export default App;

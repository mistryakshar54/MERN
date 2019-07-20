import React from 'react';
import AppHeader from "./components/Layout/Header/Header";
import AppContent from "./components/Layout/Content/Content";
import './App.scss';

function App() {
  return (
    <div className="App">
      <AppHeader />
      <AppContent />
    </div>
  );
}

export default App;

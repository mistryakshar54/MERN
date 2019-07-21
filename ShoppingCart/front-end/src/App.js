import React from 'react';
import AppHeader from "./components/Layout/Header/Header";
import AppContent from "./components/Layout/Content/Content";
import './App.scss';
import store from "./store/store";
import { Provider } from "react-redux";

function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <AppHeader />
        <AppContent />
      </div>
    </Provider>
  );
}

export default App;

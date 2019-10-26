import React from "react";
import './App.css';
import MainContent from './Components/AppLayout/MainContent/MainContent';
import store from "./store/index";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Provider store={store}>
      <Router>
        <MainContent/>
      </Router>
    </Provider>
  );
}

export default App;

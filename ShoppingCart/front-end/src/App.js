import React from 'react';
import AppHeader from "./components/Layout/Header/Header";
import AppContent from "./components/Layout/Content/Content";
import NotificationComponent from './components/Layout/Notifications/Notifications';
import './App.scss';
import store from "./store/store";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
function App() {
  return (
    <Provider store={store} >
      <div className="App">
        <Router>
          <AppHeader />
          <AppContent />
          <NotificationComponent/>
        </Router>
      </div>
    </Provider>
  );
}

export default App;

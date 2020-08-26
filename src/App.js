import React from 'react';
import logo from './logo.svg';
import './App.css';
import CustomerList from "./customer/list/CustomerList";
import 'bootstrap/dist/css/bootstrap.min.css';
import RouterManager from "./router/RouterManager";

function App() {
  return (
    <div className="App">
      <RouterManager/>
    </div>
  );
}

export default App;

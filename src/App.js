import React from 'react';
import './App.css';
import Dashboard from './Components/Dashboard/Dashboard';
import Header from './Components/Header/Header';
import Form from './Components/Form/Form';

function App() {
  return (
    <div className = "App">
      <Dashboard/>
      <Header/>
      <Form/>
    </div>
  );
}

export default App;

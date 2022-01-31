import './App.css';
import SignIn from './signIn';
import SignUp from './signUp';
import React from 'react';
import {Routes, Route, Link, BrowserRouter} from 'react-router-dom';
import Home from './home';

function App() {
  return (
    <div className="App">
      <Home/>
    </div>
  );
}

export default App;

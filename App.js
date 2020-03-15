import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App" >
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        <p>

        <h2><center>Hello Becker, Logan</center></h2>
        <h2><center>Date: 3/15/20</center></h2>
        <h2><center>Class: CSC 435 Advanced Web Development</center></h2>
        <h2><center>Assignment 1</center></h2>
        </p>

        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;

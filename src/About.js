import logo from './logo.svg';
import './App.css';
// import { useState } from 'react';

function About() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          My name is Kevin.
        </p>
        <p>This is about page</p>
        <button className="App-button">
          click me!
        </button>
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
};

export default About;

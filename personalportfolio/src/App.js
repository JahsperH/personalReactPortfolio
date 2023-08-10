// import logo from './logo.svg';
import React, { useState } from 'react';
import Home from './component/Home';
import './App.css';


function App() {
  const [greeting, setGreeting] = useState('Welcome! React state is awesome!');
  const handleStateChange = () => {
    setGreeting('React state is really awesome!');
  };
  return (
    <div className="App">
      <h1>Personal Portfolio</h1>
      <Home 
        greeting={greeting}
        handleStateChange={handleStateChange}
      />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link" 
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;

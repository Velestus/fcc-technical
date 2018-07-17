import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar/Navbar';
import Content from './components/content/Content';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <Content />
      </div>
    );
  }
}

export default App;

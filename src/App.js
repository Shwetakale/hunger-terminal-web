import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/header/header.js'

class App extends Component {
  render() {
    return (
      <Header brandName="Hunger Terminal" />
    );
  }
}

export default App;

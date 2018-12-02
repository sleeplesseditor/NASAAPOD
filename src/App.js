import React, { Component } from 'react';
import './App.css';
import './styles.css';
import NavBar from './components/NavBar';
import AstronomyList from './components/AstronomyList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <AstronomyList />
      </div>
    );
  }
}

export default App;

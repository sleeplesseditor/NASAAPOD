import React, { Component } from 'react';
import './App.css';
import './styles.css';
import NavBar from './components/NavBar';
import AstronomyContainer from './components/AstronomyContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <AstronomyContainer />
      </div>
    );
  }
}

export default App;

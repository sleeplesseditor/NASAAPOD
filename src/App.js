import React, { Component } from 'react';
import './App.css';
import AstronomyContainer from './components/AstronomyContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        NASA
        <AstronomyContainer />
      </div>
    );
  }
}

export default App;

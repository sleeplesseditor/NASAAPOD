import React, { Component } from 'react';
import './App.css';
import './styles.css';
import NavBar from './components/NavBar';
import { Offline, Online } from 'react-detect-offline';
import AstronomyList from './components/AstronomyList';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <div>
          <Online>
            <AstronomyList />
          </Online>
          <Offline>
            <p className="connection_message">Internet Connection Required</p>
          </Offline>
        </div>
      </div>
    );
  }
}

export default App;

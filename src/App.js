import React, { Component } from 'react';
import './App.css';
import './styles.css';
import NavBar from './components/NavBar';
import AstronomyList from './components/AstronomyList';
import Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <AstronomyList />
        <Footer />
      </div>
    );
  }
}

export default App;

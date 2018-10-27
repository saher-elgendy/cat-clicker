import React, { Component } from 'react';
import ImageContainer from './components/imageContainer';
import CatChanger from './components/catChanger';
import './App.css';

class App extends Component {
  render() {
    return(
      <div className="App">
        <ImageContainer />
        <CatChanger />
      </div>
    );
  }
}

export default App;
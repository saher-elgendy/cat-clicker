import React, { Component } from 'react';
import ImageContainer from './ImageContainer';
import CatChanger from './CatChanger';
import images from './images'
import './App.css';

class App extends Component {
  state = {
    allCats: [
      {
        name: 'Lucy',
        src: images.cat1,
        id: 0,
        clickCount: 0
      },
      {
        name: 'Julia',
        src: images.cat2,
        id: 1,
        clickCount: 0
      },
      {
        name: 'Katie',
        src: images.cat3,
        id: 2,
        clickCount: 0
      },
      {
        name: 'Judi',
        src: images.cat4,
        id: 3,
        clickCount: 0
      }
    ],

    currentCat: {}
  }

  componentWillMount() {
    this.setCurrentCat(this.state.allCats[0].name);
  }
  //filter current cat from all cats 
  setCurrentCat = (selectedCatName) =>{
  	this.setState(state => ({
  	  currentCat: state.allCats.filter(cat => cat.name === selectedCatName)[0]
  	}));
  }

  incrementClicks = () =>{
    const {allCats, currentCat} = this.state;
    // updating clicks count of clicked cat
  	this.setState(state => ({
  	  allCats: allCats.map(cat => cat.id === currentCat.id ? {...cat, clickCount: ++cat.clickCount}: cat), 
  	}));
    //updating the current cat to update the clicks count
    this.setCurrentCat(currentCat.name)
  }

  render() {
  	const { allCats, currentCat } = this.state;
    console.log(currentCat)
    console.log(allCats)
    
    return(
      <div className="App">
        <ImageContainer 
          cats={allCats}
          currentCat={currentCat}
          incrementClicks={this.incrementClicks}
        />
        <CatChanger 
          cats={allCats}
          currentCat={currentCat}
          setCurrentCat={this.setCurrentCat}
        />
      </div>
    );
  }
}
export default App;

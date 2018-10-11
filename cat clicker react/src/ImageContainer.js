import React, {Component} from 'react';

class ImageContainer extends Component {

  render() {
    const {currentCat, cats, incrementClicks, setCurrentCat} = this.props

    return(
      <div className="img-container">
        <div className="img">
          <img 
            className="cat-img"
            src={currentCat.src ? currentCat.src : cats[0].src} 
            alt="cat-image"
            onClick={incrementClicks}
          />
        </div>
      </div>
    );
  }
}

export default ImageContainer
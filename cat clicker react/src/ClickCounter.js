import React, {Component} from 'react';

class ClickCounter extends Component {
  render() {
  	const { currentCat} = this.props
  	return(
      <div className="click-counter">
        <div className="counter">
          <p>{currentCat.clickCount ? currentCat.clickCount  : 0} counts</p>
        </div>
      </div>
  	);
  }

}

export default ClickCounter;
import React, {Component} from 'react';
import ClickCounter from './ClickCounter';

class CatChanger extends Component {
  render() {
  	const {currentCat, setCurrentCat} = this.props;
  	return(
      <div className="cat-changer">
        <ClickCounter currentCat={currentCat}/>
        <div className="cat-select">
          <select
            onChange={e => setCurrentCat(e.target.value)}
          >
            {this.props.cats.map(cat => (
              <option 
                key={cat.id}
                value={cat.name}
              >{cat.name}</option>
	        ))}
          </select>
        </div>
      </div>
  	);
  }
}

export default CatChanger;
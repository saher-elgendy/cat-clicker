import React, { Component } from 'react';
import cats from '../cats';
import { connect } from 'react-redux';

const CatChanger =  (props) => {

  return(
    <div className="cat-changer">
      <select onChange={(e) => {props.setCurrentCat(e.target.value)} }>    
	      
        {cats.map(cat => (
          <option value={cat.name}>{cat.name}</option>
	    ))}
      </select>
    </div>
  );

}


const mapDispatchToProps = (dispatch) => {
  return {
  	setCurrentCat: (name) => dispatch({
  	  type: 'SET_CURRENT_CAT',
  	  name
  	})
  };
}

export default connect(null, mapDispatchToProps)(CatChanger);
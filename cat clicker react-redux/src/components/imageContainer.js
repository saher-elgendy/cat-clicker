import React, { Component } from 'react';
import cats from '../cats';
import { connect } from 'react-redux';

const ImageContainer  = props =>{
  const {currentCat, incrementClicks} = props;
  return(
   <div className="img-cont">
     <img 
       src={currentCat.src}
       className="cat-img"
       onClick={() => IncrementClicks(currentCat.name)}
     />
     <div className="clicks-count">
       <p>{currentCat.clickCount} clicks</p>
     </div>
   </div>
  );

}

const mapStateToProps = (state) => {
 return {
   cats: state.cats,
   currentCat: state.currentCat
 }
}

const mapDispatchToProps = (dispatch) => {
  return {
  	IncrementClicks: (name) => dispatch({
  	  type: 'INCREMENT',
      name
  	})
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(ImageContainer);
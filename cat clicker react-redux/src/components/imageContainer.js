import React, { Component } from 'react';
import { connect } from 'react-redux';
import cats from '../cats'

const ImageContainer  = props =>{
  const {cats, currentCat, incrementClicks} = props;

  const getCurrentCat = (name) => {
    return cats.filter(cat => cat.name === name)[0];
  };

  const showingCat = getCurrentCat(currentCat);
 
  return(
   <div className="img-cont">
     <div className="cat-name">
       <p>{showingCat.name}</p>
     </div>
     <img 
       src={ showingCat.src }
       className="cat-img"
       onClick={() => incrementClicks(currentCat)}
       alt='cat_img'
     />
     <div className="clicks-count">
       <p>{showingCat.clickCount} clicks</p>
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
  	incrementClicks: (name) => dispatch({
  	  type: 'INCREMENT',
      name
  	})
  };
}


export default connect(mapStateToProps, mapDispatchToProps)(ImageContainer);
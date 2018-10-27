import React, { Component } from 'react';
import cats from '../cats';
import { connect } from 'react-redux';

class ImageContainer extends Component {
	render(){
	console.log(this.props.cats)
  return(
   <div className="img-cont">
     <img 
       src={this.props.currentCat.src}
       className="cat-img"
       onClick={() => this.props.IncrementClicks(this.props.currentCat.name)}
     />
     <div className="clicks-count">
       <p>{this.props.currentCat.clickCount} clicks</p>
     </div>
   </div>
  );
}
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
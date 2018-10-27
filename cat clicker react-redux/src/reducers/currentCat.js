import cats from '../cats'

export default (state = cats[0], action) => {
  switch(action.type) {
  	case 'SET_CURRENT_CAT':
  	  return cats.filter(cat => cat.name === action.name)[0];
  	default: 
  	  return state;
  }
}
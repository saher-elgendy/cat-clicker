import cats from '../cats'

export default (state = cats, action) => {
  switch(action.type) {
  	case 'INCREMENT':
  	  return cats.map(cat => cat.name === action.name ? {...cat, clickCount: cat.clickCount++} : cat);
	
  	default:
  	  return state;
  }
}
import cats from '../cats'

const defaultState = cats[0].name;
export default (state = defaultState, action) => {
  switch(action.type) {
  	case 'SET_CURRENT_CAT':
      return action.name
  	default: 
  	  return state;
  }
}
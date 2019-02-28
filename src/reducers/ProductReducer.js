import { PRODUCTS_FETCH, PRODUCTS_DELETE } from '../actions/types'
export default function(state = [], action) {
  switch(action.type) {
    case PRODUCTS_FETCH:
      return action.payload;
    case PRODUCTS_DELETE:
      return action.payload;
    default:
      return state;
  }
}
import { ORDERS_FETCH, ORDERS_DELETE } from '../actions/types'
export default function(state = [], action) {
  switch(action.type) {
    case ORDERS_FETCH:
      return action.payload;
    case ORDERS_DELETE:
      return action.payload;
    default:
      return state;
  }
}
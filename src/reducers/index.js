import { combineReducers } from 'redux';
import OrderReducer from './OrderReducer';
import ProductReducer from './ProductReducer';

const rootReducers = combineReducers({
  products: ProductReducer,
  orders: OrderReducer
});

export default rootReducers;
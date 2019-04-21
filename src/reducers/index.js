import { combineReducers } from 'redux';
import { reducer as reduxForm } from 'redux-form'; // step 1 สร้าง form reducer
import OrderReducer from './OrderReducer';
import ProductReducer from './ProductReducer';

const rootReducers = combineReducers({
  products: ProductReducer,
  orders: OrderReducer,
  form: reduxForm
});

export default rootReducers;
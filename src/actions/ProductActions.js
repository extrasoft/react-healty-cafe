import Axios from 'axios';
import { PRODUCTS_FETCH, PRODUCTS_DELETE } from './types';

export const productsFetch = () => {
  return dispatch => {
    Axios.get('http://localhost:3001/products').then(res => {
      // console.log(res.data);
        dispatch({ 
          type: PRODUCTS_FETCH, 
          payload: res.data
        })
    })
  }
}

export const productsDelete = id => {
  return dispatch => {
    Axios.delete(`http://localhost:3001/products/${id}`).then(res => {
      // console.log(res)
      Axios.get('http://localhost:3001/products').then(res => {
        dispatch({ 
          type: PRODUCTS_DELETE, 
          payload: res.data
        })
      })
    })
  }
}
import Axios from 'axios';
import { ORDERS_FETCH, ORDER_DELETE } from './types';

export const ordersFetch = () => {
  return dispatch => {
    Axios.get(`${process.env.REACT_APP_API_URL}/orders`).then(res => {
        dispatch({ 
          type: ORDERS_FETCH, 
          payload: res.data
        })
    })
  }
}

export const orderDelete = id => {
  return dispatch => {
    Axios.delete(`${process.env.REACT_APP_API_URL}/${id}`).then(res => {
      // console.log(res)
      Axios.get(`${process.env.REACT_APP_API_URL}/orders`).then(res => {
        dispatch({ 
          type: ORDER_DELETE, 
          payload: res.data
        })
      })
    })
  }
}
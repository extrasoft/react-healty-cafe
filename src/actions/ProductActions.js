import Axios from 'axios';
import { PRODUCTS_FETCH, PRODUCT_FETCH, PRODUCT_CREATE, PRODUCT_UPDATE, PRODUCT_DELETE, PRODUCT_REMOVE_ALERT } from './types';

// ดึงสินค้าทั้งหมด
export const productsFetch = () => {
  return dispatch => {
    Axios.get(`${process.env.REACT_APP_API_URL}/products`).then(res => {
      // console.log(process.env.REACT_APP_API_URL);
        dispatch({ 
          type: PRODUCTS_FETCH, 
          payload: res.data
        })
    })
  }
}

// ดึงสินค้าบางตัว
export const productFetch = (id) => {
  return dispatch => {
    Axios.get(`${process.env.REACT_APP_API_URL}/products/${id}`).then(res => {
      // console.log(res.data);
        dispatch({ 
          type: PRODUCT_FETCH, 
          payload: res.data
        })
    })
  }
}

// // ลบสินค้า
export const productDelete = (id) => {
  return dispatch => {
    Axios.delete(`${process.env.REACT_APP_API_URL}/products/${id}`).then(res => {
      // console.log(res)
      Axios.get(`${process.env.REACT_APP_API_URL}/products`).then(res => {
        dispatch({ 
          type: PRODUCT_DELETE, 
          payload: res.data
        })
      })
    })
  }
}

export const productCreate = values => {
  return dispatch => {
    Axios.post(`${process.env.REACT_APP_API_URL}/products`, values).then(
      res => {
        dispatch({ type: PRODUCT_CREATE });
      }
    )
  }
}

export const productUpdate = (id, values) => {
  return dispatch => {
    Axios.put(`${process.env.REACT_APP_API_URL}/products/${id}`, values).then(
      res => {
        dispatch({ type: PRODUCT_UPDATE})
      }
    )
  }
}

export const productRemoveAlert = () => {
  return { type: PRODUCT_REMOVE_ALERT }
}
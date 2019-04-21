import { PRODUCTS_FETCH, PRODUCT_FETCH, PRODUCT_DELETE, PRODUCT_CREATE, PRODUCT_UPDATE, PRODUCT_REMOVE_ALERT } from '../actions/types'
export default function(state = [], action) {
  switch(action.type) {
    case PRODUCTS_FETCH:
    case PRODUCT_FETCH:
      return action.payload;
    case PRODUCT_CREATE:
      return { saved: true, msg: 'บันทึกสินค้าเรียบร้อย', alertClass: 'success', };
    case PRODUCT_UPDATE:
      // ...state จะทำการ spread ข้อมูล state เก่ากลับไปด้วยเผื่อเอาไปเปรียบเทียบ
      return { ...state, saved: true, msg: 'แก้ไขสินค้าเรียบร้อย',alertClass: 'success',};
    case PRODUCT_DELETE:
      return action.payload;
    case PRODUCT_REMOVE_ALERT:
      return { saved: false, msg: '', alertClass: '', };
    default:
      return state;
  }
}
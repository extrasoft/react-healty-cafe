// step 2 เราจะสร้าง form component
import React, { Component } from 'react';
import { reduxForm, Field } from 'redux-form'; // function ที่เราจะใช้ผูก component กับ redux-form
import FormField from '../common/FormField';
import { productFormField } from './formField';

// ใช้ connect เพื่อดึงข้อมูล จาก store เอาไว้แสดงรายละเอียดสินค้าที่ edit
import { connect } from 'react-redux'

class ProductForm extends Component {
  renderField(formField) {
      
    return formField.map( ({name, type, label, required}, i) => {
      return (
        <Field key={i} label={label} name={name} type={type} required={required} component={FormField} />
      );
    })
    
  }
  render() {

    const { onProductSubmit } = this.props
    return (
      <div>
        {/* 
          this.props.handleSubmit เป็นของ redux-form
          โดยจะทำการเช็ค form ก่อนว่ามี error รึปล่าว
          ถ้าไม่มีจะเรียกใช้ onProductSubmit
          ถ้ามีก็จะแสดงผล error
        */}
        <form onSubmit={this.props.handleSubmit(onProductSubmit)}>
          {/* ใน redux-form เราจะไม่สามารถใส่ input ลงไปตรงๆได้ จะต้องครอบด้วย Field Component อีกทีนึงก่อน */}
          { this.renderField(productFormField) }
          <button className='btn btn-block btn-info title' type='submit'>
            บันทึก
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  // function สำหรับ validate form 
  // พารามิเตอร์ values = ค่าของ  values จาก input ทุกตัวในฟอร์ม
  // console.log(values);
  
  // สร้าง object ของ error
  const errors = {};

  // เอา field component ที่ import มาวนค่าเพื่อตรวจเช็ค
  productFormField.forEach( ({ name, required }) => {
    if(!values[name] && required) {
      errors[name] = 'กรุณากรอกข้อมูล';
    }
  });

  return errors; 
  // return กลับไปให้ reduxForm
  // reduxForm ส่งต่อไปให้ <Field>
  // จะส่งต่อไปให้ attribute ที่อยู่ข้างใน <Field> component 
}

function mapStateToProps({ products }) {
  // ตรวจสอบว่าเป็นหน้าแก้ไขรึปล่าว
  if(products && products.id) {
    // console.log(products);
    /*
      initialValues เป็นของ redux-form 
      โดยเมื่อกำหนดค่าให้กับ property initialValues แล้ว
      มันจะนำค่าของ state ไปใส่ใน input แต่ละช่องให้อัตโนมัติ
    */
    return { initialValues: products }
  }else{
    return {}
  }

}

//วิธีการผูก component กับ redux-form 
// reduxForm(ฟังก์ชั่นสำหรับตรวจสอบฟอร์ม, ชื่อ state ของ่ออะไร)
ProductForm = reduxForm({ validate, form: 'productForm' })(ProductForm)

export default connect(mapStateToProps)(ProductForm);
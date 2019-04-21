import React from 'react';

//functional Component
/*
    ----- Parameters ------
    input มาจาก Field component <Field /> ทั้งก้อน มีทั้ง name, values
    meta มาจาก Field component ใช้สำหรับตรวจสอบ validate
    ค่าอื่นๆหลัง input คือค่าที่อยู่ใน Field component เช่น label type
*/
export default ({ input, label, type, required, meta: { error, touched } }) => {
  // console.log(meta);
  return (
    <div className='form-group'>
      <label className='title'>{label}</label>
      <input type={type} required={required} {...input} className='form-control'/>
      {
        error && touched && 
        (
          <div className='mt-2 text-danger title'>
            {error}
          </div>
        )
      }
    </div>
  );
}
import React from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
const NotFound = (props) => {
  return (
    <div className=''> 
      <Header />
      <div className='container text-center'>
        <h1>ERROR 404</h1>
        <h1>PAGE NOT FOUND !!!</h1>
        <p className='title'>ขออภัย ไม่พบหน้าที่คุณต้องการกรุณาตรวจสอบใหม่อีกครั้ง</p>
      </div>
      <Footer company="Thanapon" email="thanapon.yenjam@gmail.com" />
    </div>
  )
}

export default NotFound;
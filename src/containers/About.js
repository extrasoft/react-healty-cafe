import React from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
const About = (props) => {
  return (
    <div>
      <Header/>
      <div className='container col-md-5'>
        <h3>สวัสดีครับ</h3>
        <p className='title text-justify mt-4 mb-4'>
          เราคือร้านอาหาร ที่เป็นอาหารอร่อยเท่านั้นจริงๆ
          ไม่ให้ความสำคัญกับสุขภาพเท่าไหร่
          เพราะสุขภาพที่ดีนั้นคุณสามารถสร้างได้ด้วยการ "ออกกำลังกาย"
          ดังนั้นกินของอร่อยก่อน แล้วคุณจะมีกำลังไปทำในสิ่งที่คุณรัก ครับผม
        </p>
        <h4 className='text-success'>จาก เฮลตี้ คาเฟ่</h4>
      </div>
      <Footer company="Thanapon" email="thanapon.yenjam@gmail.com" />
    </div>
  );
}

export default About;
import React, { Component } from 'react';

import Header from '../components/Header';
import Monitor from '../components/monitor/Monitor';
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import { productsFetch } from '../actions';

class Home extends Component {

  componentDidMount() {
    this.props.productsFetch()
    // console.log(this.props)
  }

  render() {
    return (
      <div>
        <Header />
        <Monitor products={this.props.products}/>
        <Footer company="Thanapon" email="thanapon.yenjam@gmail.com" />
      </div>
    );
  }
}
function mapStateToProps({products}) { 
  // ฟังก์ชั่นนี้ใช้สำหรับ ดึง state ที่ได้มาจาก store แล้วแปลงเป็น props ให้ component เรียกใช้งาน
  // console.log(products);
  return { products };
}
// connect(ชื่อฟังก์ชั่นที่จะใช้ในการดึง state จาก store (จะเป็นชื่ออะไรก็ได้), ชื่อ action ที่เราจะใช้จาก store แล้วตัว redux จะแปลง action นั้นให้เป็น props ด้วย)
export default connect(mapStateToProps, { productsFetch })(Home); 

import React, { Component } from 'react';

import Header from '../components/Header';
import Monitor from '../components/monitor/Monitor';
import Footer from '../components/Footer';
import { connect } from 'react-redux';
import { productsFetch } from '../actions';

class Home extends Component {
  constructor(props){
    super(props);
    // this.state = {products : []};
  }

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
  // console.log(products);
  return { products };
}

export default connect(mapStateToProps, { productsFetch })(Home); // connect(map state ของ store to props ของ component, ชื่อ action)

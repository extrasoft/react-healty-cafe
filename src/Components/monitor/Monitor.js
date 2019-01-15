import React, { Component } from 'react'
import ProductList from '../product/ProductList';
import Calculator from './Calculator';
class Monitor extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    // const styles = {backgroundColor: '#F8F9FA'};
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8">
            <ProductList />
          </div>
          <div className="col-md-4">
            <Calculator />
          </div>
        </div>
      </div>
    );
  }
}

export default Monitor;
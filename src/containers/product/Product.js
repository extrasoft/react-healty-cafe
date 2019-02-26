import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductList from '../../components/product/ProductList';
import Axios from 'axios';
class Product extends Component {
  constructor(props) {
    super(props);
    this.state = { products: [] }
    this.delOrder = this.delOrder.bind(this);
    this.editOrder = this.editOrder.bind(this);
    this.addOrder = this.addOrder.bind(this);
  }

  componentDidMount() {
    Axios.get('http://localhost:3001/products').then(res => {
      // console.log(res.data);
      this.setState({ products: res.data })
    })
  }

  delOrder(product) {
    Axios.delete(`http://localhost:3001/products/${product.id}`).then(res => {
      Axios.get('http://localhost:3001/products').then(res => {
        this.setState({ products: res.data })
      })
    })
  }

  editOrder(product) {
    Axios.get(`http://localhost:3001/products/${product.id}`).then(res => {
      // doSomething()
    })
  }

  addOrder() {
    // doSomething()
  }

  render() {
    return (
      <div>
        <Header />
        <div className='container-fluid'>
         
            <h2>
              สินค้า
              <button className='btn btn-success text-justify float-right'>เพิ่มสินค้า</button>
            </h2>
        
          <div className='row'>
            <div className='col-12'>
              <ProductList
                products={this.state.products}
                onDelOrder={this.delOrder}
              />
            </div>
          </div>
        </div>
        <Footer />
      </div>
    )
  }
}

export default Product;
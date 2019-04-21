import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductList from '../../components/product/ProductList';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import { productsFetch, productDelete } from '../../actions'

class Product extends Component {
  constructor(props) {
    super(props);
    // this.state = { products: [] }
    this.delOrder = this.delOrder.bind(this);
    this.editOrder = this.editOrder.bind(this);
    this.addOrder = this.addOrder.bind(this);
  }

  componentDidMount() {
    this.props.productsFetch();
  }

  delOrder(product) {
    this.props.productDelete(product.id);
  }

  editOrder(product) {

    this.props.history.push(`products/edit/${product.id}`)
    // Axios.get(`http://localhost:3001/products/${product.id}`).then(res => {
    //   // doSomething()
    // })
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
              <button className='btn btn-success text-justify float-right' onClick={() => { this.props.history.push('products/add')}}>เพิ่มสินค้า</button>
            </h2>
        
          <div className='row'>
            <div className='col-12'>
              {
                // ตรวจสอบว่า products ที่ส่งมามันเป็นชิ้นเดียวหรือ array ถ้าเป็น array แล้วถึงจะแสดง ProductList
                this.props.products && Array.isArray(this.props.products) &&
                (
                  <ProductList
                    products={this.props.products}
                    onDelOrder={this.delOrder}
                    onEditOrder={this.editOrder}
                  />
                ) 
              }
              
            </div>
          </div>
        </div>
        <Footer company="Thanapon" email="thanapon.yenjam@gmail.com" />
      </div>
    )
  }
}

function mapStateToProps({products}) {
  //return State
  return {products}
}

export default withRouter( connect(mapStateToProps, { productsFetch, productDelete })(Product) );
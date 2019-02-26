import React, { Component } from "react";
import Calculator from "./Calculator";
import ProductList from "../product/ProductList";
import Axios from 'axios';
class Monitor extends Component {
    constructor(props) {
      super(props);
      this.state = {totalPrice: 0, orders: [], alert: false, alertClass: '', msg: ''};
      this.addOrder = this.addOrder.bind(this);
      this.delOrder = this.delOrder.bind(this);
      this.cancelOrder = this.cancelOrder.bind(this);
      this.confirmOrder = this.confirmOrder.bind(this);
    }

    addOrder(product) {
      let findOrder = this.state.orders.find(order => order.product.productId === product.productId);
      // console.log(findOrder);
      if(findOrder) {
          //undefined
          findOrder.quantity++;
          // console.log(this.state.orders);
      } else {
          this.state.orders.push({product: product, quantity: 1});
          // console.log(this.state.orders);
      }
      const totalPrice = this.state.totalPrice + parseInt(product.unitPrice);
      this.setState({totalPrice: totalPrice, orders: this.state.orders});
    }

    delOrder(product) {
      let findOrder = this.state.orders.find(order => order.product.productId === product.productId);
      let resultOrder = this.state.orders.filter(order => order.product.productId !== product.productId);
      const totalPrice = this.state.totalPrice - (findOrder.quantity * parseInt(findOrder.product.unitPrice));
      this.setState({totalPrice: totalPrice, orders: resultOrder});
    }

    confirmOrder() {
      const { totalPrice, orders } = this.state;
      if(orders && orders.length > 0) {
        Axios.post('http://localhost:3001/orders', {orderDate: new Date(), totalPrice, orders})
        .then(
          this.setState({
            totalPrice: 0,
            orders: [],
            alert: true,
            alertClass: 'success',
            msg: 'สั่งซื้อสิ้นค้าเรียบร้อย ^^'
          })
        )
      }else{
        this.setState({
          alert: true,
          alertClass: 'warning',
          msg: 'กรุณาสั่งซื้อสินค้าก่อนครับ ^^'
        })
      }

    }

    cancelOrder() {
      this.setState({
        totalPrice: 0, 
        orders: [],
        alert: true,
        alertClass: 'secondary',
        msg: 'ยกเลิกรายการสั่งซื้อเรียบร้อย'
      });
    }

    render() {
        return (
            <div className="container-fluid">
                <div className="row">
                  { 
                    this.state.alert && 
                    <div className='col-12'>
                      <div className={`alert alert-${this.state.alertClass} alert-dismissible fade show `} role="alert">
                        {this.state.msg}
                        <button type="button" className="close" data-dismiss="alert" aria-label="Close" onClick={() => { this.setState({alert: false, alertClass: ''}) }}>
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </div>
                    </div>
                  }
                    <div className="col-md-9 ">
                        <ProductList 
                          products={this.props.products}
                          onAddOrder={this.addOrder} 
                        />
                    </div>
                    <div className="col-md-3">
                        <Calculator 
                          totalPrice={this.state.totalPrice} 
                          orders={this.state.orders} 
                          onDelOrder={this.delOrder} 
                          onCancelOrder={this.cancelOrder}
                          onConfirmOrder={this.confirmOrder}
                        />
                    </div>
                </div>
            </div>
        )
    }
}

export default Monitor;
import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import Axios from 'axios';
class Orders extends Component {
  constructor(props) {
    super(props);
    this.state = { orders: [] }
    this.delOrder = this.delOrder.bind(this);
  }

  componentDidMount() {
    Axios.get('http://localhost:3001/orders')
    .then(res => {
        this.setState({orders: res.data})
    })
  }

  showOrders() {
    return this.state.orders && this.state.orders.map(order => {
      // convert string to date object
      let dateEvent = new Date(order.orderDate);

      // options for date object
      let options = { 
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      }

      // console.log(dateEvent.toLocaleDateString('th-Th', options));
      // return jsx Item
      return (
        <div key={order.id} className='col-4 col-sm-3'>
          <hr/>
          <div className='text-right'>
            <button className='btn btn-danger' onClick={() => this.delOrder(order.id) }>X</button>
          </div>
          <p>{dateEvent.toLocaleTimeString('th-Th', options)}</p>
          <ul className="">
            { 
              order.orders.map((orderItem, i) => {
                let { productName, unitPrice} = orderItem.product
                let { quantity } = orderItem;
                return (
                    <li key={i} className="">
                      {`${productName} ${unitPrice} * ${quantity} = ${(unitPrice * quantity).toFixed(2)} ฿`}
                    </li>
                  )
                }
              ) 
            }            
          </ul>
          <p className='title mt-2'>รวมทั้งสิ้น : {order.totalPrice.toFixed(2)} ฿</p>
          
        </div>
      )
    })
  }

  delOrder(orderId) {
    // console.log(orderId);
    Axios.delete(`http://localhost:3001/orders/${orderId}`).then(res => {
      // console.log(res)
      Axios.get('http://localhost:3001/orders').then(res => {
        this.setState({ orders: res.data })
      })
    })
  }
  render() {
    return (
      <div>
        <Header />
        <div className='container-fluid'>
        <h1>รายการสั่งซื้อ</h1>
          <div className='row'>
            {this.showOrders()}
          </div>
        </div>
        <Footer company="Thanapon" email="thanapon.yenjam@gmail.com" />
      </div>
    );
  }
}

export default Orders;
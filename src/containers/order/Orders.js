import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import { connect } from 'react-redux';
import { ordersFetch, ordersDelete } from '../../actions'

class Orders extends Component {
  constructor(props) {
    super(props);
    this.delOrder = this.delOrder.bind(this);
  }

  componentDidMount() {
    this.props.ordersFetch();
  }

  showOrders() {
    return this.props.orders && this.props.orders.map(order => {
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
    this.props.ordersDelete(orderId);
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

function mapStateToProps({orders}) {
  return {orders};
}

export default connect(mapStateToProps, {ordersFetch, ordersDelete})(Orders);
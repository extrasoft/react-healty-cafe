import React, { Component } from 'react';

class ProductItem extends Component {

  render() {
    const {productName, unitPrice, thumbnail} = this.props.product;
    const styles = {
      unitPrice : {
        color: 'orange',
        fontWeight: 'bold'
      }
    }
    return (
        <div className="col-md-3 col-sm-6">
            <img className="img-fluid img-thumbnail" src={thumbnail} alt='' />
            <h5 className="mt-2">{productName}</h5>
            <p className="title text-right" style={styles.unitPrice}>{unitPrice} ฿</p>
            <button className="btn btn-block btn-primary title" onClick={() => this.props.onAddOrder(this.props.product)} >
                ซื้อ
            </button>
            <hr />
        </div>
    )
  }
}

export default ProductItem;
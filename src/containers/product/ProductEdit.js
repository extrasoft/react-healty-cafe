import React, { Component } from 'react';
import Header from '../../components/Header';
import Footer from '../../components/Footer';
import ProductForm from '../../components/product/ProductForm';
import { connect } from 'react-redux';
import { productFetch, productCreate , productUpdate, productRemoveAlert } from '../../actions';
import { Redirect } from 'react-router-dom'

class ProductEdit extends Component {
  state = {
    redirect: false
  }

  componentDidMount() {
    // console.log('componentDidMount')
    // ถ้าเป็น url แก้ไข
    // console.log(this.props.match.params.id);
    if(this.props.match.params.id) {
      this.props.productFetch(this.props.match.params.id);
    }
  }

  renderAlert(products) {
    setTimeout( this.setRedirect , 3000);
    return (
      <div className='col-12'>
        <div className={`alert alert-${products.alertClass} alert-dismissible fade show `} role="alert">
          {products.msg}
          <button type="button" className="close" data-dismiss="alert" aria-label="Close">
          <span aria-hidden="true">&times;</span>
          </button>
        </div>
      </div>
    );
  }

  setRedirect = () => {
    this.setState({
      redirect: true
    })
  }

  renderRedirect = () => {
    if (this.state.redirect) {
      return <Redirect to='/products' />
    }
  }

  render() {
    const { match, formValues, products, productCreate, productUpdate } = this.props;
    /*
      ตัวแปร match จะถูกส่งมากับ props ตั้งแต่แรกแล้ว
      ภายในจะมี path, url, params ให้เราเรียกใช้ได้
    */
    // console.log(match);
    return (
      <div>
        <Header />
        <div className='container col-md-5'>
          { 
            match.path.indexOf('add') > 0 && (
              <div>
                { products.saved && this.renderAlert(products) }
                <h2>เพิ่ม</h2>
                {this.renderRedirect()}
                <ProductForm onProductSubmit={() => productCreate(formValues)} />
              </div>
            )
          }

          { 
            match.path.indexOf('edit') > 0 && (
              <div>
                { products.saved && this.renderAlert(products) }
                <h2>แก้ไข</h2>
                {this.renderRedirect()}
                <ProductForm onProductSubmit={() => productUpdate(products.id, formValues)} />
              </div>
            )
          }
            
        </div>                
        <Footer company="Thanapon" email="thanapon.yenjam@gmail.com" />
      </div>
    );
  }
}

function mapStateToProps({ form, products }) {
  // console.log('mapStateToProps')
  // console.log({form, products})
  return { formValues: form.productForm ? form.productForm.values : null, products };
}

export default connect( mapStateToProps, { productFetch, productCreate, productUpdate, productRemoveAlert })(ProductEdit);
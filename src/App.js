import './App.css';
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
// import Axios from 'axios';
// import Header from './components/Header';
// import Monitor from './components/monitor/Monitor';
// import Footer from './components/Footer';
import Home from './containers/Home';
import About from './containers/About';
import Orders from './containers/order/Orders';
import Product from './containers/product/Product'
import ProductEdit from './containers/product/ProductEdit';
import NotFound from './containers/error/NotFound';

class App extends Component {

  renderRouter() {
    return (
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/orders' component={Orders}/>
        <Route exact path='/products' component={Product}/>
        <Route exact path='/products/add' component={ProductEdit}/>
        <Route exact path='/products/edit/:id' component={ProductEdit}/>
        <Route exact path='/about' component={About} />
        
        <Route component={NotFound} />
      </Switch>
    )
  }


  render() {
    return (
      <Router>{this.renderRouter()}</Router>
    );
  }
}

export default App;

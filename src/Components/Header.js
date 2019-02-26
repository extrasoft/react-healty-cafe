import React, { Component } from 'react';
import { Link } from 'react-router-dom';
class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    // console.log('contructor');
    //console.log(this.state.date);
  }

  componentDidMount() {
    // console.log('componentDidMount');
    this.timerID = setInterval(() => this.tick(), 1000);
  }

  componentDidUpdate() {
    // console.log('componentDidUpdate');
  }

  componentWillUnmount() {
    // console.log('componentWillUnmount');
    clearInterval(this.timerID);
  }

  tick() {
    this.setState( {date: new Date()} );
  }

  render() {
    const styles = { height: 70 };
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 text-left">
            <h1 className="text-success">
              <img src='/images/logo/logo.png' style={styles} alt="" /> เฮลตี้ คาเฟ่
            </h1> 
          </div>
          <div className="col-md-4 text-right">
            <h5 className="title text-muted mt-4">
              {this.state.date.toLocaleTimeString()}
            </h5>
            <ul className='list-inline'>
              <li className='list-inline-item'><Link to='/' className='text-success'> Home</Link></li>
              <li className='list-inline-item'>|</li>
              <li className='list-inline-item'><Link to='/orders' className='text-success'> Orders</Link></li>
              <li className='list-inline-item'>|</li>
              <li className='list-inline-item'><Link to='/products' className='text-success'> Products</Link></li>
              <li className='list-inline-item'>|</li>
              <li className='list-inline-item'><Link to='/about' className='text-success'> About</Link></li>
            </ul>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Header;
import React, { Component } from 'react';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = { date: new Date() };
    console.log(this.state.date);
  }

  render() {
    const styles = { height: 70};
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-8 text-left">
            <h1 className="text-success">
              <img src='/images/logo/logo.png' style={styles}/> เฮลตี้ คาเฟ่
            </h1> 
          </div>
          <div className="col-md-4 text-right">
            <h5 className="title text-muted mt-4">
              {this.state.date.toLocaleTimeString()}
            </h5>
          </div>
        </div>
        <hr />
      </div>
    );
  }
}

export default Header;
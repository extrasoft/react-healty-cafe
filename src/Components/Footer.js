import React, { Component } from 'react';

class Footer extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
    
      <footer class="text-muted">
        <div class="container">
          <p class="float-right">
            <a href="#">กลับสู่ด้านบน</a>
          </p>
          <p className="text-danger text-uppercase">powered by extrasoft</p>
          <p className="text-uppercase">contact by email <a href="#">thanapon.yenjam@gmail.com</a></p>
        </div>
      </footer>
    );    
  }
}

export default Footer;
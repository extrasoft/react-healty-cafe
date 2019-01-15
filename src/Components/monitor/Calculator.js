import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p className="text-right">0</p>
        <hr/>
        <p className="text-muted text-right">ไม่มีสินค้าค่ะ</p>
        <button className="btn btn-block btn-danger title">ยืนยัน</button>
        <button className="btn btn-block btn-secondary title">ยืนยัน</button>
      </div>
    );
  }
}

export default Calculator;
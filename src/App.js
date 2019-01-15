import './App.css';
import React, { Component } from 'react';
import Header from './Components/Header';
import Monitor from './Components/monitor/Monitor';
import Footer from './Components/Footer';
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Monitor />
        <Footer />
      </div>
    );
  }
}

export default App;

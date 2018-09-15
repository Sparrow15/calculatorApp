import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class ApiFun extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,

    };
  }



  render() {
    return (
      <div className="App">
        <marquee>Hello World</marquee>
      </div>
    );
  }
}

export default ApiFun;

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
  componentDidMount(){
    this.getData()
  }

  getData = () => {
    const url = 'https://api.openbrewerydb.org/'

    fetch(url)
    .then(response => {
      return response.json();
    })
    .then(data => {
      this.setState({
        data: data
      })
    })
    .catch(error => {
      return error;
    })
  }


  render() {
    return (
      <div className="ApiFun">
        <marquee>Hello World</marquee>
      </div>
    );
  }
}

export default ApiFun;

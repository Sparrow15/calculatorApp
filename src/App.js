import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      displayValue: '0',
      operator: '',
      prevValue: '',
    };
  }
  inputDigit = digit => {
    this.setState({
      displayValue: this.state.displayValue === '0' ? String(digit) : this.state.displayValue + digit,
    });
  };
  inputDot = () => {
    if (this.state.displayValue.indexOf('.') === -1) {
      this.setState({
        displayValue: this.state.displayValue + '.',
      });
    }
  };
  clearDisplay = () => {
    this.setState({
      displayValue: '0',
    });
  };
  toggleSign = () => {
    if (this.state.displayValue === this.state.displayValue * -1) {
      this.setState({
        displayValue: this.state.displayValue * -1,
      });
    } else {
      this.setState({
        displayValue: this.state.displayValue * -1,
      });
    }
  };
  inputPercent = () => {
    const value = parseFloat(this.state.displayValue);
    this.setState({
      displayValue: String(value / 100),
    });
  };
  performOperation = o => {
    this.setState(
      {
        operator: o,
        prevValue: this.state.displayValue,
        displayValue: '0',
      },
      () => {
        console.log('prevValue', this.state.prevValue);
        console.log('operator', this.state.operator);
        console.log('displayValue', this.state.displayValue);
      }
    );
  };
  equals = () => {
    if (this.state.operator === '+') {
      let finalResult = parseFloat(this.state.displayValue) + parseFloat(this.state.prevValue);
      this.setState({
        displayValue: String(finalResult),
      });
    } else if (this.state.operator === '-') {
      let finalResult = parseFloat(this.state.prevValue) - parseFloat(this.state.displayValue);
      this.setState({
        displayValue: String(finalResult),
      });
    } else if (this.state.operator === '*') {
      let finalResult = parseFloat(this.state.displayValue) * parseFloat(this.state.prevValue);
      this.setState({
        displayValue: String(finalResult),
      });
    } else {
      let finalResult = parseFloat(this.state.prevValue) / parseFloat(this.state.displayValue);
      this.setState({
        displayValue: String(finalResult),
      });
    }
  };
  render() {
    return (
      <div className="App">
        <h3 id="numberDisplay">{this.state.displayValue}</h3>
        <div className="operations">
          <button onClick={() => this.clearDisplay()}>AC</button>
          <button onClick={() => this.inputPercent()}>%</button>
          <button onClick={() => this.toggleSign()}>±</button>
        </div>
        <div className="numberFields">
          <button onClick={() => this.inputDigit(0)}>0</button>
          <button onClick={() => this.inputDot()}>.</button>
          <button onClick={() => this.inputDigit(1)}>1</button>
          <button onClick={() => this.inputDigit(2)}>2</button>
          <button onClick={() => this.inputDigit(3)}>3</button>
          <button onClick={() => this.inputDigit(4)}>4</button>
          <button onClick={() => this.inputDigit(5)}>5</button>
          <button onClick={() => this.inputDigit(6)}>6</button>
          <button onClick={() => this.inputDigit(7)}>7</button>
          <button onClick={() => this.inputDigit(8)}>8</button>
          <button onClick={() => this.inputDigit(9)}>9</button>
        </div>
        <div className="operations">
          <button onClick={() => this.performOperation('/')}>÷</button>
          <button onClick={() => this.performOperation('*')}>x</button>
          <button onClick={() => this.performOperation('-')}>-</button>
          <button onClick={() => this.performOperation('+')}>+</button>
          <button onClick={() => this.equals()}>=</button>
        </div>
      </div>
    );
  }
}
export default App;

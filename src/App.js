import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);this.state = {
      data: null,
      displayValue: "0",
      opertor: '',
      prevValue: ' ',


    };
}
 inputDigit =digit => {
   this.setState({displayValue :this.state.displayValue ==='0'? String(digit) : this.state.displayValue+digit
   });
 };

inputDot =()=>{
  if(this.state.displayValue.indexOf('.')=== -1){
    this.setState({
     displayValue: this.state.displayValue + '.',
    });
  }
};

clearDisplay =() => {
  this.setState(
    {displayValue : "0"}
  )
}

toggleSign = () => {
  if(this.state.displayValue === this.state.displayValue * -1 ){
    this.setState({
      displayValue: this.state.displayValue * -1,
    });
  }else {
    this.setState({
      displayValue: this.state.displayValue * -1 ,
    });
  }
}

inputPercent = () => {
  let value = parseFloat(this.state.displayValue);
  this.setState({
    displayValue : String(value / 100),
  })
}

performOperation =  () => {
this.setState({
  operator : 0,
  prevValue: this.state.displayValue,
  displayValue: '0',
},
() => {
  console.log('prevValue', this.state.prevValue);
  console.log('operator', this.state.operator);
  console.log('displayValue', this.state.displayValue);
});
}
  render() {
    return (
    <div className="App">
    <div id="resultsDisplay">
    <h3 id="numberDisplay">{this.state.displayValue}</h3>
    </div>

      <div className="numberFields">
       <button id = "button" onClick={() => this.inputDigit(0)}>0</button>
       <button id = "button" onClick={() => this.inputDigit(1)}>1</button>
       <button id = "button" onClick={() => this.inputDigit(2)}>2</button>
       <button id = "button" onClick={() => this.inputDigit(3)}>3</button>
      </div>
      <div className = "numberFields">
       <button id = "button" onClick={() => this.inputDigit(4)}>4</button>
       <button id = "button" onClick={() => this.inputDigit(5)}>5</button>
       <button id = "button" onClick={() => this.inputDigit(6)}>6</button>
       <button id = "button" onClick={() => this.inputDigit(7)}>7</button>
       <div className= "numberFields">
        <button id = "button" onClick={() => this.inputDigit(8)}>8</button>
       <button id = "button" onClick={() => this.inputDigit(9)}>9</button>
       </div>
     </div>
      <div className= "operations">
         <button id = "button" onClick={()=> this.performOperation('/')}>÷</button>
         <button id = "button" onClick={()=> this.performOperation('*')}>x</button>
         <button id = "button" onClick={()=> this.performOperation('-')}>-</button>
    </div>
      <div className= "operations">
         <button id = "button" onClick={()=> this.performOperation('+')}>+</button>
         <button id = "button" onClick={()=> this.inputResults()}>=</button>
         <button id = "button" onClick={() => this.inputDot()}>.</button>
       </div>
       <div className = "operations">
         <button id = "button" onClick ={() => this.clearDisplay()}>AC</button>
         <button id = "button" onClick = {() => this.inputPercent()}>%</button>
         <button id = "button" onClick ={() =>this.toggleSign()}>±</button>

       </div>
    </div>
     );
   }
 }

export default App;

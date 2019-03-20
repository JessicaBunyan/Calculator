import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CalcButton from "./CalcButton";

class App extends Component {
  constructor(props) {
    super(props);
    
this.state={output:0,
  operation: ''
}

  }

  add = (number) => this.setState({output:this.state.output+number})
  subtract = (number) => this.setState({output:this.state.output-number})
  multiply = (number) => this.setState({output:this.state.output*number})
  divide = (number) => this.setState({output:this.state.output/number})
  setOperation = (symbol) => this.setState({operation:symbol})
  
 ;
changeOperation = (symbol) =>{

  
  switch(symbol){
 case '+':
 this.setOperation('+');
 break;
case '-':
this.setOperation('-');
 break;
 case '*':
 this.setOperation('*')
 break;
case '/':
this.setOperation('/')
 break;
default:
 
  }
}




 operate = (number) => {
   switch(this.state.operation){
  case '+':
  this.add(number);
  break;
case '-':
  this.subtract(number);
  break;
  case '*':
  this.multiply(number)
  break;
case '/':
 this.divide(number)
  break;
default:
  alert("Select an operator")
   }
}
 

  render() {
    return (
      <div className="App">
<CalcButton value = {1} onClick = {this.operate}
/>
<CalcButton value = {2} onClick = {this.operate}
/>
<CalcButton value = {3} onClick = {this.operate}
/>
<CalcButton value = {4} onClick = {this.operate}
/>
<CalcButton value = {5} onClick = {this.operate}
/>
<CalcButton value = {6} onClick = {this.operate}
/>
<CalcButton value = {7} onClick = {this.operate}
/>
<CalcButton value = {8} onClick = {this.operate}
/>
<CalcButton value = {9} onClick = {this.operate}
/>
<CalcButton value = {0} onClick = {this.operate}
/>

<CalcButton value = {'+'} onClick = {this.changeOperation}
/>

<CalcButton value = {'-'} onClick = {this.changeOperation}
/>

<CalcButton value = {'*'} onClick = {this.changeOperation}
/>

<CalcButton value = {'/'} onClick = {this.changeOperation}
/>

<h1>{this.state.output}</h1>
      </div>
    );
  }
}

export default App;

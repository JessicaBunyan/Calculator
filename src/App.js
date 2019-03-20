import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import CalcButton from "./CalcButton";

class App extends Component {
  constructor(props) {
    super(props);
    
this.state={output:0}

this.add=this.add.bind(this);
  }

  add = (number) => this.setState({output:this.state.output+number})
 ;

 addOnClick = (d)=> this.add(d);

  render() {
    return (
      <div className="App">
<CalcButton value = {1} onClick = {this.add}
/>
<CalcButton value = {2} onClick = {this.add}
/>
<CalcButton value = {3} onClick = {this.add}
/>
<CalcButton value = {4} onClick = {this.add}
/>
<CalcButton value = {5} onClick = {this.add}
/>
<CalcButton value = {6} onClick = {this.add}
/>
<CalcButton value = {7} onClick = {this.add}
/>
<CalcButton value = {8} onClick = {this.add}
/>
<CalcButton value = {9} onClick = {this.add}
/>
<CalcButton value = {0} onClick = {this.add}
/>

<h1>{this.state.output}</h1>
      </div>
    );
  }
}

export default App;

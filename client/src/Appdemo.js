import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Hello from  './component/Hello';
import Display from  './component/Display';

class App extends Component {
  state = {
   name: "Poornima",
   text: "what's up?"
 }
  render() {
    // var name = (params) => {
    
    // }
    return (
    
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          <Hello name={this.state.name}/>
          <Hello text={this.state.text}/>
          <Hello />
          <Display />
        </p>
      </div>
    );
  }
}

export default App;

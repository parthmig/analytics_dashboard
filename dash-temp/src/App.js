import React, { Component } from 'react';
import './App.css';

import Header from './components/Header';
import ChartOne from './components/ChartOne';
import ChartTwo from './components/ChartTwo';
import Circle from './components/Circle';
import CircleTwo from './components/CircleTwo'
import { DropdownMenu } from './components/DropdownMenu';

class App extends Component {
  render() {
    return(
      <div className="App">
        <Header />
        <DropdownMenu />
        <ChartOne /> 
        <ChartTwo />
        <Circle />
        <CircleTwo />
      </div>
    );
  }
}

export default App;

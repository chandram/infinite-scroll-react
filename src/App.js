import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import PageScroll from './PageScroll';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          {/* <img src={logo} className="App-logo" alt="logo" /> */}
          <h1 className="App-title">Implementing Infinite Scroll with IO</h1>
        </header>
        <PageScroll />
      </div>
    );
  }
}

export default App;

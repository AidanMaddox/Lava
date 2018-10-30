import React, { Component } from 'react';
import Footer from './Footer';
import Body from './Body';

import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Body/>
        <Footer/>
      </div>
    );
  }
}

export default App;

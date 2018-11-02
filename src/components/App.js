import React, { Component } from 'react';
import Footer from '../components/Footer';
import Body from '../components/Body';

import logo from '../images/logo.svg';
import '../styles/App.css';

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

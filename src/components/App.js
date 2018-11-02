import React, { Component } from 'react';
import {BrowserRouter, Router, Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import Footer from '../components/Footer';
import Body from '../components/Body';
import Business from '../components/Business';
import logo from '../images/logo.svg';
import '../styles/App.css';

class App extends Component {
  render() {
    return (

        <BrowserRouter>
          <div className="App">

              <Route exact path='/' component={Body} />
              <Route exact path='/business' component={Business}/>

          </div>
        </BrowserRouter>
      );
  }
}

export default App;

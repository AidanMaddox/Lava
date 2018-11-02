import React, { Component } from 'react';
<<<<<<< HEAD

import {BrowserRouter,Router, Switch} from 'react-router-dom';
=======
import {BrowserRouter, Router, Switch} from 'react-router-dom';
>>>>>>> d37fbda1ac065dd210ad53ea3b71f32cd40b8e7e
import Route from 'react-router-dom/Route';
import Footer from '../components/Footer';
import Body from '../components/Body';
import Business from '../components/Business';
<<<<<<< HEAD


=======
>>>>>>> d37fbda1ac065dd210ad53ea3b71f32cd40b8e7e
import logo from '../images/logo.svg';
import '../styles/App.css';

class App extends Component {
  render() {
    return (

        <BrowserRouter>
          <div className="App">

              <Route exact path='/' component={Body} />
              <Route exact path='/business' component={Business}/>
              {/*<Route exact path="/faq" component={} />
              <Route exact path="/termsofservices" component={} />*/}

          </div>
        </BrowserRouter>
      );
  }
}

export default App;

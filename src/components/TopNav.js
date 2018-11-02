import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ResponsiveMenu from 'react-responsive-navbar';
import '../styles/topnav.css';

class TopNav extends Component{
  render(){
    return(
      <Router>
        <div>
          <div className='logo-container'>
            <div className='logo-pic'></div>
          </div>

          <div className='menu'>
            <ResponsiveMenu

              changeMenuOn="500px"
              largeMenuClassName="large-menu-classname"
              smallMenuClassName="small-menu-classname"
              menu={
                <ul>
                  <Button bsClass='btn-logout'>  <Link to="/"> Logout </Link> </Button>
                </ul>
              }
            />
          </div>

        </div>
      </Router>

    )
  }
}
export default TopNav;

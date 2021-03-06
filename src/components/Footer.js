import React, { Component } from 'react';
import '../styles/footer.css';
import {BrowserRouter,Router, Switch} from 'react-router-dom';
import Route from 'react-router-dom/Route';
import ResponsiveMenu from 'react-responsive-navbar';
import '../styles/footer.css';
//import{ Popover} from 'react-bootstrap';

class Footer extends Component{
  render(){
    return (
      <Router>
        <div>


          <div className='footer'>
            <ResponsiveMenu

              changeMenuOn="500px"
              largeMenuClassName="footer-large-menu-classname"
              smallMenuClassName="footer-small-menu-classname"
              menu={

                <ul>
                  <li>  <Link to="/faq"> FAQ </Link> </li>
                  <li>  <Link to="/contact"> Contact Us </Link> </li>
                  <li>  <Link to="/TOS"> Terms of Services </Link> </li>
                </ul>

              }
            />
          </div>

        </div>
      </Router>
    );
  }
}
export default Footer;

import React, { Component } from 'react';
import {Button} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ResponsiveMenu from 'react-responsive-navbar';
import '../styles/footer.css';

class Footer extends Component{
  render(){
    return(
      <Router>
        <div>
          <div className='footer'>
            <ResponsiveMenu

              changeMenuOn="500px"
              largeMenuClassName="footer-large-menu-classname"
              smallMenuClassName="footer-small-menu-classname"
              menu={
                <ul>
                  <ul>  <Link to="/faq"> FAQ </Link> </ul>
                  <ul>  <Link to="/contactUs"> Contact Us </Link> </ul>
                  <ul>  <Link to="/termsofservices"> Terms of Services </Link> </ul>
                </ul>
              }
            />
          </div>

        </div>
      </Router>

    )
  }
}
export default Footer;

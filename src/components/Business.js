import React, { Component } from 'react';
import TopNav from '../components/TopNav';
import '../styles/business.css';
import Footer from '../components/Footer';
import dulce from '../images/ducle.analytics.PNG';
class Business extends Component{
  render(){
    return (
      <div>
      <TopNav/>
        <div className='business-container'>


          <div className='container'>
            <h1>Business Landing Page</h1>
          </div>

          <div className='info-container'>
            <div className= 'analytics-container'>
            <img src={dulce}/>

            </div>

            <div>
              <div className='price-scroller'>
              </div>
            </div>
          </div>
        </div>
      <Footer/>
      </div>

    )
  }
}
export default Business;

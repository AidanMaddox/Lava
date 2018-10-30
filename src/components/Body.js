import React, { Component } from 'react';
import{ Grid, Row, Col} from 'react-bootstrap';
import bgoverlay from '../images/bgoverlay.png';
import bgoverlay2 from '../images/bgoverlay-2.png';
import '../styles/body.css';

class Body extends Component{
  render(){
    return (
      <div className='container-body'>

      <Grid className='grid'>
          <Row className="show-grid">
            <Col xs={12} md={9}>
            <div className="title">
              <h1>
              Save money with real time menu pricing.
              </h1>
            </div>
            </Col>

             <Col xsHidden smHidden md={3}className="side-pannel">
              <img src={bgoverlay} className="bg-img" alt="cover" />
            </Col>
            <Col mdHidden lgHidden xs={12} sm={12} className="lower-img-container">
              <img src={bgoverlay2} className="bg-img-small" alt="cover" />
            </Col>
          </Row>
      </Grid>


      </div>
    );
  }
}
export default Body;

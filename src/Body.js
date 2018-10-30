import React, { Component } from 'react';
import{ Grid, Row, Col} from 'react-bootstrap';
import bgoverlay from './bgoverlay.png';

class Booter extends Component{
  render(){
    return (
      <div>

      <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8}>

            </Col>

            <Col xs={3} md={2}>
              <img src={bgoverlay} className="bg-img" alt="cover" />
            </Col>
          </Row>
      </Grid>


      </div>
    );
  }
}
export default Booter;

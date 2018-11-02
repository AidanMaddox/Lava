import React, { Component } from 'react';
import{ Grid, Row, Col} from 'react-bootstrap';
import bgoverlay from '../images/bgoverlay.png';
import bgoverlay2 from '../images/bgoverlay-2.png';
import chomplogo from '../images/chomp-07.png';
import MailchimpSubscribe from 'react-mailchimp-subscribe';
import '../styles/body.css';

const url = "//xxxx.us13.list-manage.com/subscribe/post?u=zefzefzef&id=fnfgn";

// simplest form (only email)
// const SimpleForm = () => <MailchimpSubscribe url={url}/>
//
// // use the render prop and your custom form
// const CustomForm = () => (
//   <MailchimpSubscribe
//     url={url}
//     render={({ subscribe, status, message }) => (
//       <div>
//         <MyForm onSubmitted={formData => subscribe(formData)} />
//         {status === "sending" && <div style={{ color: "blue" }}>sending...</div>}
//         {status === "error" && <div style={{ color: "red" }} dangerouslySetInnerHTML={{__html: message}}/>}
//         {status === "success" && <div style={{ color: "green" }}>Subscribed !</div>}
//       </div>
//     )}
//   />
// );

class Body extends Component{
  render(){
    return (
      <div>

      <Grid>
          <Row className="show-grid">
            <Col xs={12} md={9}>
            <div className="text-column">
            <img src={chomplogo} className="logoimg" alt="logo" />

              <h1 className="main-title">
              Save money with real time menu pricing.
              </h1>
              <h3>Paper menus are so old school.</h3>
              <h3>Chomp saves you money by decreasing menu prices<br/> during off-hours at resturants.</h3>
              <h4>Comming soon to USC...</h4>


              <div id="emailbox">
              <MailchimpSubscribe url={url} />
              </div>


            </div>







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
export default Body;

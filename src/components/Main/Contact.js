import React from 'react';
import { Link } from 'react-router-dom';
import { Element } from 'react-scroll';
import { Grid, Row, Col } from 'react-bootstrap';

const Contact = () => {
  return(
    <Grid className="contactPage">
      <Element name="contact" className="element">
        <Row className="show-grid title">
          <Col xs={12} sm={6} smOffset={3} md={4} mdOffset={4} lg={4} lgOffset={4}>
            <h2>SARAH.GABRIELLE</h2>
          </Col>
        </Row>
        <Row className="box">
          <Col className="textContact" lg={12}>
            <h2>Get in touch!</h2>
          </Col>
          <Col className="textContact" lg={12}>
            <h3>INFO@SARAHGABRIELLE.CO</h3>
          </Col>
          <Col className="textContact" lg={12}>
            <a href="mailto:info@sarahgabrielle.co"><i id="contact" className="fa fa-envelope fa-lg" aria-hidden="true"></i></a>
            <a href="https://twitter.com/Sar_Gabrielle"><i id="contact" className="fa fa-twitter fa-lg" aria-hidden="true"></i></a>
            <a href="https://www.linkedin.com/in/sarah-gabrielle/"><i id="contact" className="fa fa-linkedin-square fa-lg" aria-hidden="true"></i></a>
            <a href="https://github.com/sarahgabrielle"><i id="contact" className="fa fa-github fa-lg" aria-hidden="true"></i></a>
          </Col>
        </Row>
      </Element>
    </Grid>
  );
};

export default Contact;

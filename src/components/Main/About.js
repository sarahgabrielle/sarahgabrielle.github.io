import React from 'react';
import { Element } from 'react-scroll';
import { Grid, Row, Col } from 'react-bootstrap';

const About = () => {
  return(
    <Grid className="aboutPage">
      <Element name="about" className="element">
        <Row className="show-grid title">
          <Col xs={12} sm={6} smOffset={3} md={4} mdOffset={4} lg={4} lgOffset={4}>
            <h2>SARAH.GABRIELLE</h2>
          </Col>
        </Row>
        <Row className="show-grid">
          <Col className="aboutPageBox" lg={4} lgOffset={1}>
            <img className="aboutPageImage" src="https://images.pexels.com/photos/547114/pexels-photo-547114.jpeg?h=350&dpr=2&auto=compress&cs=tinysrgb"></img>
          </Col>
          <Col className="aboutPageBox" lg={6}>
            <p className="aboutParagraph">
              <i className="fa fa-quote-right fa-2x" aria-hidden="true"></i>
              <br/>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
          </Col>
        </Row>
      </Element>
    </Grid>
  );
};

export default About;

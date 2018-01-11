import React from 'react';
import { Element } from 'react-scroll';
import { Grid, Row, Col } from 'react-bootstrap';

const Home = () => {
  return(
    <Grid className="homePage">
      <Element name="home" className="element">
        <Row className="show-grid title">
          <Col xs={12} sm={6} smOffset={3} md={4} mdOffset={4} lg={4} lgOffset={4}>
            <h2>SARAH.GABRIELLE</h2>
          </Col>
        </Row>
        <Row className="show-grid box">
          <Col className="textHome" lg={8} lgOffset={2}>
            <em>Junior Full Stack Developer based in London  - who enjoys creating beautiful and functional applications.</em>
          </Col>
        </Row>
      </Element>
    </Grid>
  );
};

export default Home;
